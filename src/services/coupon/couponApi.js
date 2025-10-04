// src/services/coupon/couponApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const couponApi = createApi({
  reducerPath: "couponApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/`, // 👈 आपकी API base
  }),
  endpoints: (builder) => ({
    getAllCoupons: builder.query({
      query: () => "/couponsUser",
    }),
    applyCoupon: builder.mutation({
      query: (body) => ({
        url: "coupon/apply",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllCouponsQuery, useApplyCouponMutation } = couponApi;
