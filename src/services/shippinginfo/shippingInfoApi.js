import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shippingInfoApi = createApi({
  reducerPath: "shippingInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/shipping-info`,
  }),
  tagTypes: ["shippingInfo"],
  endpoints: (builder) => ({    
    getShippingInfo: builder.query({
      query: () => "",
      providesTags: ["shippingInfo"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetShippingInfoQuery } = shippingInfoApi;