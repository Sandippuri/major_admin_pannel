import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const batchApi = createApi({
  reducerPath: "batchApi",
  tagTypes: ["Batch"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://campus.timalsinasagar.com.np",
  }),
  endpoints: (builder) => ({
    getAllBatches: builder.query({
      query: () => `/batch`,
      providesTags: ["Batch"],
    }),
    getSingleBatch: builder.query({
      query: (id) => `/batch/${id}`,
      providesTags: ["Batch"],
    }),
    addBatch: builder.mutation({
      query: (batch) => ({
        url: `/batch/`,
        method: "POST",
        body: batch,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["Batch"],
    }),
    editBatch: builder.mutation({
      query: ({ ID, ...rest }) => ({
        url: `/batch/${ID}`,
        method: "PATCH",
        body: rest,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["Batch"],
    }),
    deleteBatch: builder.mutation({
      query: (id) => ({
        url: `/batch/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["Batch"],
    }),
  }),
});

export const {
  useGetAllBatchesQuery,
  useDeleteBatchMutation,
  useEditBatchMutation,
  useGetSingleBatchQuery,
  useAddBatchMutation,
} = batchApi;
