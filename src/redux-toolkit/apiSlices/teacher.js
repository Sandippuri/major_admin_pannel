import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getAllTeachers: builder.query({
      query:() => `/teachers`,
    }),
    addTeacher: builder.mutation({
      query:teacher => ({
        url:`/addTeacher`,
        method:'POST',
        body:teacher
      }),
    }),
  }),
})


export const { useGetAllTeachersQuery,useAddTeacherMutation } = teacherApi;