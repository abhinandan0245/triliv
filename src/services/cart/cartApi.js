import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/cart`,
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    // 👀 Get cart for a customer
    getCart: builder.query({
      query: (customerId) => `/view/${customerId}`,
      providesTags: ['Cart'],
    }),

    // ➕ Add item to cart
    addToCart: builder.mutation({
      query: (body) => ({
        url: '/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cart'],
    }),

    // 🔁 Update quantity
    updateCartQuantity: builder.mutation({
      query: (body) => ({
        url: '/update',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Cart'],
    }),

    //  Remove from cart
    removeFromCart: builder.mutation({
      query: (body) => ({
        url: '/remove',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartQuantityMutation,
  useRemoveFromCartMutation,
} = cartApi;
