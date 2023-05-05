import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const collegeProgrammeApi = createApi({
  reducerPath: "collegeProgrammeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://campus.timalsinasagar.com.np" }),
  endpoints: (builder) => ({
    getAllCollegeProgrammes: builder.query({
      query: () => `/campus_programme`,
    }),
    addDepartmentProgramme: builder.mutation({
      query: (collegeProgramme) => ({
        url: `/campus_programme/`,
        method: "POST",
        body: collegeProgramme,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
    }),
    deleteCollegeProgramme: builder.mutation({
      query: (id) => ({
        url: `/campus_programme/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: getAuthToken(),
        },
      }),
    }),
  }),
});

export const {
  useGetAllCollegeProgrammesQuery,
  useAddDepartmentProgrammeMutation,
  useDeleteCollegeProgrammeMutation,
} = collegeProgrammeApi;
