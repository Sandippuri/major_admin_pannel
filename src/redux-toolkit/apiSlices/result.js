import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const resultApi = createApi({
  reducerPath: 'resultApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getAllMarks: builder.query({
      query:() => `/results`,
    })
  }),
})


export const { useGetAllMarksQuery} = resultApi;