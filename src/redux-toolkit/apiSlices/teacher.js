import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const teacherApi = createApi({
  reducerPath: "teacherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getAllTeachers: builder.query({
      query: () => `/teachers`,
    }),
    addTeacher: builder.mutation({
      query: (teacher) => ({
        url: `/addTeacher`,
        method: "POST",
        body: teacher,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
    }),
  }),
});

export const { useGetAllTeachersQuery, useAddTeacherMutation } = teacherApi;
