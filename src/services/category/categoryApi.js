import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/category`, // e.g., http://localhost:8000
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => '/categories', // no token needed for public view
    }),
    getCategoryById: builder.query({
      query: (id) => `/categories/${id}`,
    }),
    searchCategoriesByName: builder.query({
      query: (name) => `/categories/search/name?name=${name}`,
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useSearchCategoriesByNameQuery,
} = categoryApi;
