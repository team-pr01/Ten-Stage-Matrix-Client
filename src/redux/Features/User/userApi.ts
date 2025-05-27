/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../API/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => {
        return {
          url: `/users/profile`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getUserDetails: builder.query({
      query: () => {
        return {
          url: `/users/details`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

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


     updateProfile: builder.mutation({
      query: (forgotPasswordData) => ({
        url: "/users/profile",
        method: "PUT",
        body: forgotPasswordData,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

     changePassword: builder.mutation({
      query: (data) => ({
        url: "/users/change-password",
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetUserDetailsQuery,
  useGetReferralListQuery,
  useGetActivityStatsQuery,
  useGetTransactionHistoryQuery,
  useTransferFundMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = userApi;
