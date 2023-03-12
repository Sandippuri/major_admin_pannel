import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://20.104.198.15:4000" }),
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
    }),
  }),
});

export const { useLoginMutation } = authApi;
