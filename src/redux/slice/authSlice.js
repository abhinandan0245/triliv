// // features/auth/authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// // Safe parse function
// const safeJSONParse = (value) => {
//   try {
//     if (!value || value === 'undefined') return null;
//     return JSON.parse(value);
//   } catch (e) {
//     console.error('Failed to parse JSON from localStorage:', e);
//     return null;
//   }
// };

// const initialState = {
//   user: safeJSONParse(localStorage.getItem('CUSTOMER_USER')),
//   token: localStorage.getItem('CUSTOMER_TOKEN') || null,
//   isAuthenticated: !!localStorage.getItem('CUSTOMER_TOKEN'),
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user, token } = action.payload;
//       state.user = user;
//       state.token = token;
//       state.isAuthenticated = true;

//       if (user) {
//   localStorage.setItem('CUSTOMER_USER', JSON.stringify(user));
// }
//       localStorage.setItem('CUSTOMER_TOKEN', token);
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;

//       localStorage.removeItem('CUSTOMER_USER');
//       localStorage.removeItem('CUSTOMER_TOKEN');
//     },
//   },
// });

// export const { setCredentials, logout } = authSlice.actions;
// export default authSlice.reducer;


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

const TOKEN_KEY = 'CUSTOMER_TOKEN';
const USER_KEY = 'CUSTOMER_USER';

const initialState = {
  user: safeJSONParse(localStorage.getItem(USER_KEY)),
  token: localStorage.getItem(TOKEN_KEY) || null,
  isAuthenticated: !!localStorage.getItem(TOKEN_KEY),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;

      // 🔐 Update Redux state
      state.user = user || null;
      state.token = token || null;
      state.isAuthenticated = !!token;

      // 📝 Persist to localStorage
      if (user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(USER_KEY);
      }

      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
      } else {
        localStorage.removeItem(TOKEN_KEY);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(TOKEN_KEY);
    },
    // ✅ Extra reducer: restore from storage (optional but useful)
    rehydrateAuth: (state) => {
      const storedUser = safeJSONParse(localStorage.getItem(USER_KEY));
      const storedToken = localStorage.getItem(TOKEN_KEY);

      state.user = storedUser;
      state.token = storedToken;
      state.isAuthenticated = !!storedToken;
    },
  },
});

export const { setCredentials, logout, rehydrateAuth } = authSlice.actions;
export default authSlice.reducer;

