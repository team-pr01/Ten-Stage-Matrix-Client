/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../API/baseApi";

const depositApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    makeDeposit: builder.mutation<any, any>({
      query: (data) => ({
        url: `/transactions/deposit`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["deposit"],
    }),
  }),
});

export const {
  useMakeDepositMutation,
} = depositApi;
