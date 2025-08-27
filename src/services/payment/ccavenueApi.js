// src/services/payment/ccavenueApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ccavenueApi = createApi({
  reducerPath: 'ccavenueApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/payment`,
  }),
  endpoints: (builder) => ({
    initiateCCAvenuePayment: builder.mutation({
      query: (body) => ({
        url: '/ccavenue/initiate',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useInitiateCCAvenuePaymentMutation } = ccavenueApi;