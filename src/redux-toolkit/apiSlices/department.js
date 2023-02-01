import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const departmentApi = createApi({
  reducerPath: 'departmentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getAllDepartments: builder.query({
      query:() => `/departments`,
    }),
    addDepartment: builder.mutation({
      query:department => ({
        url:`/addDepartment`,
        method:'POST',
        body:department
      }),
    }),
  }),
})


export const { useGetAllDepartmentsQuery,useAddDepartmentMutation } = departmentApi;