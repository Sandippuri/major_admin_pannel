import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const sectionApi = createApi({
  reducerPath: "sectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://student.timalsinasagar.com.np",
  }),
  tagTypes: ["Section"],
  endpoints: (builder) => ({
    getAllSections: builder.query({
      query: () => `/sections`,
      providesTags: ["Section"],
    }),
    addSection: builder.mutation({
      invalidatesTags: ["Section"],
      query: (section) => ({
        url: `/sections/`,
        method: "POST",
        body: section,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjgyOTMyOTg1fQ.BmlLC9xQkGELZEl0_ND1x9-cPUlVGxQbWDB3mbICJQQ",
        },
      }),
    }),
    deleteSection: builder.mutation({
      invalidatesTags: ["Section"],
      query: (id) => ({
        url: `/sections/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjgyOTMyOTg1fQ.BmlLC9xQkGELZEl0_ND1x9-cPUlVGxQbWDB3mbICJQQ",
        },
      }),
    }),
  }),
});

export const {
  useGetAllSectionsQuery,
  useAddSectionMutation,
  useDeleteSectionMutation,
} = sectionApi;
