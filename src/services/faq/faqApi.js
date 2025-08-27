
// src/redux/services/wishlistApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const faqApi = createApi({
  reducerPath: "faqApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/faqs`,
  }),
  tagTypes: ["Faq"],
  endpoints: (builder) => ({
    // Add product to wishlist

    // Get paginated wishlist by customerId
    getFaq: builder.query({
      query: () => "",
      providesTags: ["Faq"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetFaqQuery } = faqApi;