// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Safe parse function
const safeJSONParse = (value) => {
  try {
    if (!value || value === 'undefined') return null;
    return JSON.parse(value);
  } catch (e) {
    console.error('Failed to parse JSON from localStorage:', e);
    return null;
  }
};

const initialState = {
  user: safeJSONParse(localStorage.getItem('CUSTOMER_USER')),
  token: localStorage.getItem('CUSTOMER_TOKEN') || null,
  isAuthenticated: !!localStorage.getItem('CUSTOMER_TOKEN'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;

      if (user) {
  localStorage.setItem('CUSTOMER_USER', JSON.stringify(user));
}
      localStorage.setItem('CUSTOMER_TOKEN', token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem('CUSTOMER_USER');
      localStorage.removeItem('CUSTOMER_TOKEN');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
