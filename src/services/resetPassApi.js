import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resetPasswordApi = createApi({
  reducerPath: "resetPasswordApi",
  baseQuery: fetchBaseQuery({
     baseUrl: `${import.meta.env.VITE_API_URL}`, // e.g., http://localhost:8000
  }),
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: (email) => ({
        url: "/send-otp",
        method: "POST",
        body: { email },
      }),
    }),
    resendOtp: builder.mutation({
      query: (email) => ({
        url: "/resend-otp",
        method: "POST",
        body: { email },
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ email, code }) => ({
        url: "/verify-otp",
        method: "POST",
        body: { email, code },
      }),
    }),
    resetPassword: builder.mutation({
  query: ({ email, code, newPassword, confirmPassword }) => ({
    url: "/reset-password",
    method: "POST",
    body: { email, code, newPassword, confirmPassword }, // ✅ include all required fields
  }),
}),

  }),
});

export const {
  useSendOtpMutation,
  useResendOtpMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = resetPasswordApi;
