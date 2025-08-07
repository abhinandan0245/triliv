// src/hooks/useAutoLogout.js
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/authSlice";

const useAutoLogout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("CUSTOMER_TOKEN");

    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // in seconds

      if (decoded.exp < currentTime) {
        // Token expired
        dispatch(logout());
      } else {
        const timeout = (decoded.exp - currentTime) * 1000; // ms
        const timer = setTimeout(() => {
          dispatch(logout());
        }, timeout);

        return () => clearTimeout(timer);
      }
    } catch (err) {
      console.error("Token decode failed, logging out:", err);
      dispatch(logout());
    }
  }, [dispatch]);
};

export default useAutoLogout;
