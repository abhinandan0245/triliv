
// src/redux/services/wishlistApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactMessageApi = createApi({
  reducerPath: "contactMessageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/contact-message`,
//     prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth?.token; // depends on your auth slice
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
  }),
  tagTypes: ["ContactMessage"],
  endpoints: (builder) => ({ 

    createContactMessage: builder.mutation({
      query: (message) => ({
        url: "",
        method: "POST",
        body: message,
      }),
      invalidatesTags: ["ContactMessage"],
    }),
  }),
});

export const { useCreateContactMessageMutation } = contactMessageApi;