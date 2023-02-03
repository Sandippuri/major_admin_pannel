import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const noticeApi = createApi({
  reducerPath: 'noticeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getAllNotices: builder.query({
      query:() => `/notices`,
    }),
    addNotice: builder.mutation({
      query:noticeElement => ({
        url:`/addNoticeel`,
        method:'POST',
        body:noticeElement
      }),
    }),
  }),
})


export const { useGetAllNoticesQuery,useAddNoticeMutation } = noticeApi;