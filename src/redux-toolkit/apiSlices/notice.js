import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const noticeApi = createApi({
  reducerPath: "noticeApi",
  tagTypes: ["Notice"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://campus.timalsinasagar.com.np" }),
  endpoints: (builder) => ({
    getAllNotices: builder.query({
      query: () => `/notice`,
      providesTags: ["Notice"],
    }),
    getSingleNotice: builder.query({
      query: (id) => `/notice/${id}`,
      providesTags: ["Notice"],
    }),
    addNotice: builder.mutation({
      query: (notice) => ({
        url: `/notice/`,
        method: "POST",
        body: notice,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["Notice"],
    }),
    editNotice: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/notice/${id}`,
        method: "PATCH",
        body: rest,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["Notice"],
    }),
    deleteNotice: builder.mutation({
      query: (id) => ({
        url: `/notice/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["Notice"],
    }),
  }),
});

export const {
  useGetAllNoticesQuery,
  useGetSingleNoticeQuery,
  useDeleteNoticeMutation,
  useAddNoticeMutation,
  useEditNoticeMutation,
} = noticeApi;
