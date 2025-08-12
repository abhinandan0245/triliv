


// src/redux/services/wishlistApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const refundPolicyApi = createApi({
  reducerPath: "refundPolicyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/refund-policy`,
  }),
  tagTypes: ["RefundPolicy"],
  endpoints: (builder) => ({
    // Add product to wishlist

    // Get paginated wishlist by customerId
    getRefundPolicy: builder.query({
      query: () => "",
      providesTags: ["RefundPolicy"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetRefundPolicyQuery } = refundPolicyApi;