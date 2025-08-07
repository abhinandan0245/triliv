
// services/whyShopApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const banner2Api = createApi({
  reducerPath: 'banner2Api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/bannerstwo`, // e.g., http://localhost:8000/api/whyshop
  }),
  tagTypes: ['Banner2'],
  endpoints: (builder) => ({
    getAllBanners: builder.query({
      query: () => '/',
      providesTags: ['Banner2'],
    }),
    getBannerById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['Banner2'],
    }),
    
   
  }),
});

export const {
  useGetAllBannersQuery,
  useGetBannerByIdQuery,
  
} = banner2Api;
