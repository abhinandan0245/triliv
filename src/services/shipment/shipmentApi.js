// src/services/payment/ccavenueApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shipmentApi = createApi({
  reducerPath: 'shipmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/shipment`,
  }),
  endpoints: (builder) => ({
    ShipmentCost: builder.mutation({
      query: (body) => ({
        url: '/cost',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useShipmentCostMutation } = shipmentApi;