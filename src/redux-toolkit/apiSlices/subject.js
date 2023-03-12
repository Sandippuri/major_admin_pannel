import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";
export const subjectApi = createApi({
  reducerPath: "subjectApi",
  tagTypes: ["Subject"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://20.104.198.15:5001" }),
  endpoints: (builder) => ({
    getAllSubjects: builder.query({
      query: () => `/subjects`,
      providesTags: ["Subject"],
    }),
    addSubject: builder.mutation({
      query: (subject) => ({
        url: `/subjects/`,
        method: "POST",
        body: subject,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
        },
        invalidatesTags: ["Subject"],
      }),
    }),
    getSubject: builder.query({
      query: (id) => `/subjects/${id}`,
      providesTags: ["Subject"],
    }),
  }),
});

export const {
  useGetAllSubjectsQuery,
  useGetSubjectQuery,
  useAddSubjectMutation,
} = subjectApi;
