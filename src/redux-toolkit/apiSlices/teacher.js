import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getAuthToken } from "../../utils/auth";

export const teacherApi = createApi({
  reducerPath: "teacherApi",
  tagTypes: ["Teacher"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://teacher.timalsinasagar.com.np",
  }),
  endpoints: (builder) => ({
    getAllTeachers: builder.query({
      query: () => `/teachers/`,
      providesTags: ["Teacher"],
    }),
    getSingleTeacher: builder.query({
      query: (id) => `/teachers/${id}`,
      providesTags: ["Teacher"],
    }),
    addTeacher: builder.mutation({
      query: (teacher) => ({
        url: `/teachers/`,
        method: "POST",
        body: teacher,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // Authorization: getAuthToken(),
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
        },
      }),
      invalidatesTags: ["Teacher"],
    }),
    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `/teachers/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // Authorization: getAuthToken(),
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
        },
      }),
      invalidatesTags: ["Teacher"],
    }),
  }),
});

export const {
  useGetAllTeachersQuery,
  useGetSingleTeacherQuery,
  useDeleteTeacherMutation,
  useAddTeacherMutation,
} = teacherApi;
