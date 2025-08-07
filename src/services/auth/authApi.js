// services/auth/authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/customer`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('CUSTOMER_TOKEN');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
    }),

    getUserProfile: builder.query({
      query: () => "/profile", // update to your actual endpoint
    }),

     // ✅ NEW: Update profile
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: '/profile',
        method: 'PUT',
        body: data,
      }),
    }),

  }),
});

export const { useLoginMutation, useSignupMutation , useGetUserProfileQuery  , useUpdateUserProfileMutation} = authApi;
