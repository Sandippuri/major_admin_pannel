import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

export const sectionApi = createApi({
  reducerPath: "sectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://student.timalsinasagar.com.np",
  }),
  endpoints: (builder) => ({
    getAllSections: builder.query({
      query: () => `/sections`,
    }),
    addSection: builder.mutation({
      query: (section) => ({
        url: `/sections/`,
        method: "POST",
        body: section,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
        },
      }),
    }),
  }),
});

export const { useGetAllSectionsQuery, useAddSectionMutation } = sectionApi;
