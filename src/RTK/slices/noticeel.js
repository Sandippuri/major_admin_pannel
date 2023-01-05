import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const noticeelApi = createApi({
  reducerPath: 'noticeelApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getAllNoticeels: builder.query({
      query:() => `/noticeels`,
    }),
    addNotice: builder.mutation({
      query:noticeel => ({
        url:`/addNoticeel`,
        method:'POST',
        body:noticeel
      }),
    }),
  }),
})


export const { useGetAllNoticeelsQuery,useAddNoticeelMutation } = noticeelApi;