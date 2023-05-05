import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const departmentApi = createApi({
  reducerPath: "departmentApi",
  tagTypes: ["Department"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://campus.timalsinasagar.com.np" }),
  endpoints: (builder) => ({
    getAllDepartments: builder.query({
      query: () => `/department`,
      providesTags: ["Department"],
    }),
    getSingleDepartment: builder.query({
      query: (id) => `/department/${id}`,
      providesTags: ["Department"],
    }),
    addDepartment: builder.mutation({
      query: (department) => ({
        url: `/department/`,
        method: "POST",
        body: department,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["Department"],
    }),
    editDepartment: builder.mutation({
      query: ({ ID, ...rest }) => ({
        url: `/department/${ID}`,
        method: "PATCH",
        body: rest,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["Department"],
    }),
    deleteDepartment: builder.mutation({
      query: (id) => ({
        url: `/department/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
      invalidatesTags: ["Department"],
    }),
  }),
});

export const {
  useGetAllDepartmentsQuery,
  useDeleteDepartmentMutation,
  useEditDepartmentMutation,
  useAddDepartmentMutation,
  useGetSingleDepartmentQuery,
} = departmentApi;
