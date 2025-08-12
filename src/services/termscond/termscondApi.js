


// src/redux/services/wishlistApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const termscondApi = createApi({
  reducerPath: "termscondApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/terms-conditions`,
  }),
  tagTypes: ["TermConditions"],
  endpoints: (builder) => ({
    // Add product to wishlist

    // Get paginated wishlist by customerId
    getTermsConditions: builder.query({
      query: () => "",
      providesTags: ["TermConditions"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetTermsConditionsQuery } = termscondApi;