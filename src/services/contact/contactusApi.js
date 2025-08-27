
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactusApi = createApi({
  reducerPath: "contactusApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/contact`,
  }),
  tagTypes: ["ContactPage"],
  endpoints: (builder) => ({ 

    getContactus: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      invalidatesTags: ["ContactPage"],
    }),
  }),
});

export const { useGetContactusQuery } = contactusApi;