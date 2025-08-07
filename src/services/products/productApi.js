import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const serializeQueryParams = (params = {}) => {
  const searchParams = new URLSearchParams();
  for (const key in params) {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (v !== undefined && v !== null) {
          searchParams.append(key, v);
        }
      });
    } else if (value !== undefined && value !== null) {
      searchParams.append(key, value);
    }
  }
  return searchParams.toString();
};


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}`,
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => {
        const queryString = serializeQueryParams(params);
        return `/products?${queryString}`;
      },
      providesTags: ['Product'],
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ['Product'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} = productApi;
