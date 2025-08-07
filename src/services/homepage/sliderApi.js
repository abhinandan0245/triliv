

// services/whyShopApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sliderApi = createApi({
  reducerPath: 'sliderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/banners`, // e.g., http://localhost:8000/api/whyshop
  }),
  tagTypes: ['Banner'],
  endpoints: (builder) => ({
    getAllBanners: builder.query({
      query: () => '/',
      providesTags: ['Banner'],
    }),
    getBannerById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['Banner'],
    }),
    
   
  }),
});

export const {
  useGetAllBannersQuery,
  useGetBannerByIdQuery,
  
} = sliderApi;
