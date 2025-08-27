// src/services/order/orderApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/order`,
     prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    // 📦 Create new order
    createOrder: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Order'],
    }),

   // 📜 Get all orders of the logged-in customer
   getMyOrders: builder.query({
  query: () => `/my`,
  providesTags: ['Order'],
  transformResponse: (response) => response.data, // now `orders` will be the array
}),

    // 📄 Get single order by ID (customer-safe)
    getMyOrderById: builder.query({
      query: (orderId) => `/my/${orderId}`,
      providesTags: ['Order'],
      transformResponse: (response) => response.data, // ✅ unwrap the `data` object
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetMyOrdersQuery,
  useGetMyOrderByIdQuery,
} = orderApi;
