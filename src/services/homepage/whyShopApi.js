// services/whyShopApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const whyShopApi = createApi({
  reducerPath: 'whyShopApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/why-shop`, // e.g., http://localhost:8000/api/whyshop
  }),
  tagTypes: ['WhyShop'],
  endpoints: (builder) => ({
    getAllWhyShop: builder.query({
      query: () => '/',
      providesTags: ['WhyShop'],
    }),
    getWhyShopById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['WhyShop'],
    }),
    createWhyShop: builder.mutation({
      query: (newData) => ({
        url: '/',
        method: 'POST',
        body: newData,
      }),
      invalidatesTags: ['WhyShop'],
    }),
    updateWhyShop: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
      invalidatesTags: ['WhyShop'],
    }),
    deleteWhyShop: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['WhyShop'],
    }),
  }),
});

export const {
  useGetAllWhyShopQuery,
  useGetWhyShopByIdQuery,
  useCreateWhyShopMutation,
  useUpdateWhyShopMutation,
  useDeleteWhyShopMutation,
} = whyShopApi;
