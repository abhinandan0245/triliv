


// src/redux/services/wishlistApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutusApi = createApi({
  reducerPath: "aboutusApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/aboutus`,
  }),
  tagTypes: ["AboutUs"],
  endpoints: (builder) => ({
    // Add product to wishlist

    // Get paginated wishlist by customerId
    getAboutus: builder.query({
      query: () => "",
      providesTags: ["AboutUs"],
      transformResponse: (response) => response.about,
    }),
  }),
});

export const { useGetAboutusQuery } = aboutusApi;