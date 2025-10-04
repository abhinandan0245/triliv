// // src/redux/services/wishlistApi.js
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const wishlistApi = createApi({
//   reducerPath: "wishlistApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${import.meta.env.VITE_API_URL}/wishlist`, // Adjust if different
//   }),
//   tagTypes: ["Wishlist"],
//   endpoints: (builder) => ({
//     // Add product to wishlist
//     addToWishlist: builder.mutation({
//       query: ({ customerId, productId }) => ({
//         url: "/add",
//         method: "POST",
//         body: { customerId, productId },
//       }),
//       transformResponse: (response) => {
//         // Match your backend response structure
//         return response.success ? response.wishlist : response;
//       },
//       invalidatesTags: ["Wishlist"],
//     }),

//     // Get wishlist by customerId
//     getWishlist: builder.query({
//       query: (customerId) => `/${customerId}`,
//       providesTags: ["Wishlist"],
//       transformResponse: (response) =>
//         response.success ? response.wishlist : response,
//     }),

//     // Delete from wishlist
//     deleteFromWishlist: builder.mutation({
//       query: (id) => ({
//         url: `/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Wishlist"],
//     }),
//   }),
// });

// export const {
//   useAddToWishlistMutation,
//   useGetWishlistQuery,
//   useDeleteFromWishlistMutation,
// } = wishlistApi;


// src/redux/services/wishlistApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/wishlist`,
  }),
  tagTypes: ["Wishlist"],
  endpoints: (builder) => ({
    // Add product to wishlist
    addToWishlist: builder.mutation({
      query: ({ customerId, productId }) => ({
        url: '/add',
        method: "POST",
        body: { customerId, productId },
      }),
      transformResponse: (response) => response.wishlist,
      invalidatesTags: ["Wishlist"],
    }),

    // Get paginated wishlist by customerId
    getWishlist: builder.query({
      query: (customerId) => `/customer/${customerId}`,
      providesTags: ["Wishlist"],
      transformResponse: (response) => ({
        wishlist: response.wishlist,
          count: response.total,   // 👈 direct count le aaya
        pagination: {
          total: response.total,
          page: response.page,
          pages: response.pages
        }
      }),
    }),

    // Check if product is in wishlist
    checkWishlist: builder.query({
      query: ({ customerId, productId }) => ({
        url: '/check',
        params: { customerId, productId }
      }),
      providesTags: ["Wishlist"],
      transformResponse: (response) => response,
    }),

    // Delete from wishlist
    deleteFromWishlist: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useAddToWishlistMutation,
  useGetWishlistQuery,
  useLazyCheckWishlistQuery,
  useDeleteFromWishlistMutation,
} = wishlistApi;