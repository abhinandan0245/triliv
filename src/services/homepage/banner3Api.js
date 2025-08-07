
// services/whyShopApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const banner3Api = createApi({
  reducerPath: 'banner3Api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/bannersthree`, // e.g., http://localhost:8000/api/whyshop
  }),
  tagTypes: ['Banner3'],
  endpoints: (builder) => ({
    getAllBanners: builder.query({
      query: () => '/',
      providesTags: ['Banner3'],
    }),
    getBannerById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['Banner3'],
    }),
    
   
  }),
});

export const {
  useGetAllBannersQuery,
  useGetBannerByIdQuery,
  
} = banner3Api;
