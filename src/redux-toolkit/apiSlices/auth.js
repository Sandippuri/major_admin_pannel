import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://authentication.timalsinasagar.com.np",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: `/login/`,
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhanUiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NzU5NjQ3NDl9.mpyYw5Ni6qoo7nFtDkUzdT4tTDLDYHQsj2OqnTCmNNk",
        },
      }),
      providesTags: ["User"],
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: `/register/`,
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjc3MDY3MDA1fQ.90Z7xGV_rSOwZ1_MBa17K287dGFp6IrgHSbAx07Ewrw",
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterUserMutation,
  useGetAllUsersQuery,
} = authApi;
