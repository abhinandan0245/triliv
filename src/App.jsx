import React, { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import ScrollTop from "./components/ui/Modal/ScrollTop";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import useAutoLogout from "./hooks/useAutoLogout";
import { useGetAllCategoriesQuery } from "./services/category/categoryApi";
import { useDispatch } from "react-redux";
import { rehydrateAuth } from "./redux/slice/authSlice";
import Loader from "./components/loader/Loader";
import ScrollToTop from "./components/ScrollToTop";

// 🔹 Lazy loaded pages
const Homepage = lazy(() => import("./pages/Home/Homepage"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const AboutPage = lazy(() => import("./pages/OurStory&AboutUs/AboutPage"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const WishlistPage = lazy(() => import("./pages/Wishlist/WishlistPage"));
const ProductDetail = lazy(() => import("./pages/ProductDetails/ProductDetail"));
const PrivacyPolicy = lazy(() => import("./pages/Policies/PrivacyPolicy"));
const TermsCondition = lazy(() => import("./pages/Policies/TermsCondition"));
const FAQPage = lazy(() => import("./pages/Policies/FAQs"));
const ReturnRefund = lazy(() => import("./pages/Policies/ReturnRefund"));
const Shipping = lazy(() => import("./pages/Policies/Shipping"));
const CheckoutPage = lazy(() => import("./pages/Cart/CheckoutPage"));
const Cart = lazy(() => import("./pages/Cart/CartPage"));
const MyAccount = lazy(() => import("./pages/Account/MyAccount"));
const Orders = lazy(() => import("./pages/Account/Orders"));
const Addresses = lazy(() => import("./pages/Account/Addresses"));
const AccountDetail = lazy(() => import("./pages/Account/AcoountDetail"));
const OrderSuccess = lazy(() => import("./pages/System/ThankYou"));
const OrderDetailPage = lazy(() => import("./pages/Account/OrderDetailPage"));
// const NotFoundPage = lazy(() => import("./pages/System/NotFound"));

function App() {
  const { isLoading: loadingCategories } = useGetAllCategoriesQuery();
  const globalLoading = loadingCategories;

  useAutoLogout();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    dispatch(rehydrateAuth());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="app">
      {loading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header />
      <ScrollTop />
      {/* footer page scroll on top  */}
      <ScrollToTop/>

      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/category/:categoryId" element={<Shop />} />
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/wish-list" element={<WishlistPage />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />

            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/term-condition" element={<TermsCondition />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/returnrefund" element={<ReturnRefund />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            <Route
              path="/myaccount"
              element={
                <PrivateRoute>
                  <MyAccount />
                </PrivateRoute>
              }
            />
            <Route
              path="/addresses"
              element={
                <PrivateRoute>
                  <Addresses />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute>
                  <Orders />
                </PrivateRoute>
              }
            />
            <Route path="/orders/:id" element={<OrderDetailPage />} />

            <Route
              path="/accountdetails"
              element={
                <PrivateRoute>
                  <AccountDetail />
                </PrivateRoute>
              }
            />
            <Route path="/thankyou/:id" element={<OrderSuccess />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
