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

    getActivityHistory: builder.query({
      query: () => {
        return {
          url: `/activities/history`,
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

    getDonationHistory: builder.query({
      query: () => {
        return {
          url: `/donations/history`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getTeamTree: builder.query({
      query: () => {
        return {
          url: `/users/team-tree`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getTransferHistory: builder.query({
      query: () => {
        return {
          url: `/transfers/history`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getReports: builder.query({
      query: () => {
        return {
          url: `/users/stats`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    transferFund: builder.mutation<any, any>({
      query: (data) => ({
        url: `/transfers/process`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    makeDonation: builder.mutation<any, any>({
      query: (data) => ({
        url: `/donations/process`,
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
        url: "/users/profile",
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
  useGetActivityHistoryQuery,
  useGetTransactionHistoryQuery,
  useGetDonationHistoryQuery,
  useGetTeamTreeQuery,
  useGetTransferHistoryQuery,
  useGetReportsQuery,
  useTransferFundMutation,
  useMakeDonationMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = userApi;
