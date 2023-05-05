import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resultApi = createApi({
  reducerPath: "resultApi",
  tagTypes: ["Result"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://result.timalsinasagar.com.np",
  }),
  endpoints: (builder) => ({
    getAllPublished: builder.query({
      query: () => ({
        url: `/published/`,
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjgyOTMyOTg1fQ.BmlLC9xQkGELZEl0_ND1x9-cPUlVGxQbWDB3mbICJQQ",
        },
      }),
      providesTags: ["Result"],
    }),
    addResult: builder.mutation({
      query: (data) => ({
        url: `/symbolnumber/upload/`,
        method: "POST",
        formData: true,
        body: data,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjgyOTMyOTg1fQ.BmlLC9xQkGELZEl0_ND1x9-cPUlVGxQbWDB3mbICJQQ",
        },
      }),
      invalidatesTags: ["Result"],
    }),
  }),
});

export const { useGetAllPublishedQuery, useAddResultMutation } = resultApi;
