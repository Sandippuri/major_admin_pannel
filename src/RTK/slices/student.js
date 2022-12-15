import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query:() => `/students`,
    }),
    addStudent: builder.mutation({
      query:student => ({
        url:`/addStudent`,
        method:'POST',
        body:student
      }),
    }),
  }),
})


export const { useGetAllStudentsQuery,useAddStudentMutation } = studentApi;