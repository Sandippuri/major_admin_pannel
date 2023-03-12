import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const programmeApi = createApi({
  reducerPath: "programmeApi",
  tagTypes: ["Programme"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://campus.timalsinasagar.com.np" }),
  endpoints: (builder) => ({
    getAllProgrammes: builder.query({
      query: () => `/programme`,
      providesTags: ["Programme"],
    }),
    getSingleProgramme: builder.query({
      query: (id) => `/programme/${id}`,
      providesTags: ["Programme"],
    }),
    addProgramme: builder.mutation({
      query: (programme) => ({
        url: `/programme/`,
        method: "POST",
        body: programme,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // Authorization: getAuthToken(),
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
        },
      }),
      invalidatesTags: ["Programme"],
    }),
    editProgramme: builder.mutation({
      query: ({ ID, ...rest }) => ({
        url: `/programme/${ID}`,
        method: "PATCH",
        body: rest,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // Authorization: getAuthToken(),
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
        },
      }),
      invalidatesTags: ["Programme"],
    }),
    deleteProgramme: builder.mutation({
      query: (id) => ({
        url: `/programme/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // Authorization: getAuthToken(),
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
        },
      }),
      invalidatesTags: ["Programme"],
    }),
  }),
});

export const {
  useGetAllProgrammesQuery,
  useGetSingleProgrammeQuery,
  useDeleteProgrammeMutation,
  useEditProgrammeMutation,
  useAddProgrammeMutation,
} = programmeApi;
