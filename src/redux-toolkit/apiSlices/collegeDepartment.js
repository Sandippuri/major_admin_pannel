import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const collegeDepartmentApi = createApi({
  reducerPath: "collegeDepartmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://campus.timalsinasagar.com.np" }),
  endpoints: (builder) => ({
    getAllCollegeDepartments: builder.query({
      query: () => `/campus_department`,
    }),
    addCollegeDepartment: builder.mutation({
      query: (collegeDepartment) => ({
        url: `/campus_department/`,
        method: "POST",
        body: collegeDepartment,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
        },
      }),
    }),
  }),
});

export const {
  useGetAllCollegeDepartmentsQuery,
  useAddCollegeDepartmentMutation,
} = collegeDepartmentApi;
