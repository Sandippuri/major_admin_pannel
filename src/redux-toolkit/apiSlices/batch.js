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
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
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
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
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
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
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
