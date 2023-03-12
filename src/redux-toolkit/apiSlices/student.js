import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";
export const studentApi = createApi({
  reducerPath: "studentApi",
  tagTypes: ["Student"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://20.104.198.15:6001" }),
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => `/students`,
      providesTags: ["Student"],
    }),
    addStudent: builder.mutation({
      query: (student) => ({
        url: `/students/`,
        method: "POST",
        body: student,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
        },
        invalidatesTags: ["Student"],
      }),
    }),
    getStudent: builder.query({
      query: (id) => `/students/${id}`,
      providesTags: ["Student"],
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetStudentQuery,
  useAddStudentMutation,
} = studentApi;
