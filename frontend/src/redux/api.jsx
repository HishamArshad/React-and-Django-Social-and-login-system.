// Need to use the React-specific entry point to import createApi
import { useContext } from 'react'
import { Context } from '../context'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 
 
// Define a service using a base URL and expected endpoints
export const djangoApi = createApi({
  reducerPath: 'djangoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'api/accounts/login/',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ["Posts"]
    }),

    logout: builder.mutation({
      query: (token) => ({
        url: 'api/accounts/logout/',
        method: 'GET',
        headers: {
          'Authorization': `Token ${token}`,
        },
      }),
      invalidatesTags: ["Posts"]
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useLogoutMutation } = djangoApi;
