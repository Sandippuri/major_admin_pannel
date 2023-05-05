import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";
import { applyMiddleware } from "@reduxjs/toolkit";

export const collegeDepartmentApi = createApi({
  reducerPath: "collegeDepartmentApi",
  tagTypes: ["CollegeDepartment"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://campus.timalsinasagar.com.np" }),
  endpoints: (builder) => ({
    getAllCollegeDepartments: builder.query({
      query: () => `/campus_department`,
      providesTags: ["CollegeDepartment"],
    }),
    getSingleCollegeDepartment: builder.query({
      query: (id) => `/campus_department/${id}`,
      providesTags: ["CollegeDepartment"],
    }),
    addCollegeDepartment: builder.mutation({
      query: (collegeDepartment) => ({
        url: `/campus_department/`,
        method: "POST",
        body: collegeDepartment,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["CollegeDepartment"],
    }),
    deleteCollegeDepartment: builder.mutation({
      query: (id) => ({
        url: `/campus_department/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["CollegeDepartment"],
    }),
  }),
});

export const {
  useGetAllCollegeDepartmentsQuery,
  useGetSingleCollegeDepartmentQuery,
  useAddCollegeDepartmentMutation,
  useDeleteCollegeDepartmentMutation,
} = collegeDepartmentApi;
