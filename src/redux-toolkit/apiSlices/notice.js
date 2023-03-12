import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const noticeApi = createApi({
  reducerPath: "noticeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getAllNotices: builder.query({
      query: () => `/notices`,
    }),
    addNotice: builder.mutation({
      query: (noticeElement) => ({
        url: `/addNoticeel`,
        method: "POST",
        body: noticeElement,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
    }),
  }),
});

export const { useGetAllNoticesQuery, useAddNoticeMutation } = noticeApi;
