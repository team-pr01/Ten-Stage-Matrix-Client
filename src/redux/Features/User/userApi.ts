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

    getReferralList: builder.query<any, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 } = {}) => {
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());

        return {
          url: `/users/referrals?${params.toString()}`,
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
      query: ({ page = 1, limit = 10 }) => {
        return {
          url: `/activities/history?page=${page}&limit=${limit}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getTransactionHistory: builder.query({
      query: ({ page = 1, limit = 10 }) => {
        return {
          url: `/transactions/history?page=${page}&limit=${limit}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getDonationHistory: builder.query({
      query: ({ page = 1, limit = 10 }) => {
        return {
          url: `/donations/history?page=${page}&limit=${limit}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getTeamTree: builder.query({
      query: ({ stage, status, page = 1, limit = 10 }) => {
        const params = new URLSearchParams();

        if (stage && stage !== "All Stages") params.append("stage", stage);
        if (status && status !== "All Status") params.append("status", status);
        params.append("page", page.toString());
        params.append("limit", limit.toString());

        return {
          url: `/users/team-tree?${params.toString()}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getReferralTree: builder.query({
      query: () => {
        return {
          url: `/users/team-tree-chain`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getTeamTreeById: builder.query({
      query: (id) => {
        return {
          url: `/users/team-tree-chain/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getTeamTreeByIdList: builder.query({
      query: ({ id, page = 1, limit = 10 }) => {
        return {
          url: `/users/team-tree/${id}?page=${page}&limit=${limit}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getTransferHistory: builder.query({
      query: ({ page = 1, limit = 10 }) => {
        return {
          url: `/transfers/history?page=${page}&limit=${limit}`,
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

    getPublicSettings: builder.query({
      query: () => {
        return {
          url: `/settings/public`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getStageData: builder.query({
      query: () => {
        return {
          url: `/stages`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getAllReferralList: builder.query({
      query: (id) => {
        return {
          url: `/users/${id}/referral-details`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getLevelProgressPosition: builder.query({
      query: () => {
        return {
          url: `/users/level-position-progress`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getEarningHistory: builder.query({
      query: ({ page = 1, limit = 10 }) => {
        return {
          url: `/activities/commission?page=${page}&limit=${limit}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getGeneratedWallet: builder.query({
      query: () => {
        return {
          url: `/wallet/last`,
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

    requestWithdraw: builder.mutation<any, any>({
      query: (data) => ({
        url: `/transactions/withdrawal`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/users/profile",
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    updateWalletAddress: builder.mutation({
      query: (data) => ({
        url: "/users/wallet",
        method: "PUT",
        body: data,
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

    generateWalletAddress: builder.mutation({
      query: () => ({
        url: "/wallet/generate",
        method: "POST",
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
  useGetReferralTreeQuery,
  useGetTeamTreeByIdListQuery,
  useGetTeamTreeByIdQuery,
  useGetTransferHistoryQuery,
  useGetReportsQuery,
  useGetPublicSettingsQuery,
  useGetStageDataQuery,
  useGetAllReferralListQuery,
  useGetLevelProgressPositionQuery,
  useGetEarningHistoryQuery,
  useGetGeneratedWalletQuery,
  useTransferFundMutation,
  useMakeDonationMutation,
  useRequestWithdrawMutation,
  useUpdateProfileMutation,
  useUpdateWalletAddressMutation,
  useChangePasswordMutation,
  useGenerateWalletAddressMutation,
} = userApi;
