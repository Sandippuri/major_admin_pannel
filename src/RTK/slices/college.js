import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const collegeApi = createApi({
  reducerPath: 'collegeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getAllColleges: builder.query({
      query:() => `/colleges`,
    }),
    addCollege: builder.mutation({
      query:college => ({
        url:`/addcollege`,
        method:'POST',
        body:college
      }),
    }),
  }),
})


export const { useGetAllCollegesQuery,useAddCollegeMutation } = collegeApi;