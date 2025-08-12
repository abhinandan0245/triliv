


// src/redux/services/wishlistApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const privacyPolicyApi = createApi({
  reducerPath: "privacyPolicyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/privacy-policy`,
  }),
  tagTypes: ["PrivacyPolicy"],
  endpoints: (builder) => ({
    // Add product to wishlist

    // Get paginated wishlist by customerId
    getPrivacyPolicy: builder.query({
      query: () => "",
      providesTags: ["PrivacyPolicy"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  
  useGetPrivacyPolicyQuery,
  
} = privacyPolicyApi;