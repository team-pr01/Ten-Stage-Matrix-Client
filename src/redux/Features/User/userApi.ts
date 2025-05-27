/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../API/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReferralList: builder.query({
      query: () => {
        return {
          url: `/users/referrals`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getActivityStats: builder.query({
      query: () => {
        return {
          url: `/activities/stats`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getTransactionHistory: builder.query({
      query: () => {
        return {
          url: `/transactions/history`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    transferFund: builder.mutation<any, any>({
      query: (data) => ({
        url: `/transfers`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetReferralListQuery,
  useGetActivityStatsQuery,
  useGetTransactionHistoryQuery,
  useTransferFundMutation,
} = userApi;
