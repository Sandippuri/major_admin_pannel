import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const collegeApi = createApi({
  reducerPath: "collegeApi",
  tagTypes: ["College"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://campus.timalsinasagar.com.np" }),
  endpoints: (builder) => ({
    getAllColleges: builder.query({
      query: () => `/campus`,
      providesTags: ["College"],
    }),
    getSingleCollege: builder.query({
      query: (id) => `/campus/${id}`,
      providesTags: ["College"],
    }),

    addCollege: builder.mutation({
      query: (college) => ({
        url: `/campus/`,
        method: "POST",
        body: college,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["College"],
    }),
    editCollege: builder.mutation({
      query: ({ ID, ...rest }) => ({
        url: `/campus/${ID}`,
        method: "PATCH",
        body: rest,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["College"],
    }),
    deleteCollege: builder.mutation({
      query: (id) => ({
        url: `/campus/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["College"],
    }),
  }),
});

export const {
  useGetAllCollegesQuery,
  useDeleteCollegeMutation,
  useEditCollegeMutation,
  useGetSingleCollegeQuery,
  useAddCollegeMutation,
} = collegeApi;
