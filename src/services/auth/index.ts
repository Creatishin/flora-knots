import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface VerifyPhoneResponse {
  success: boolean;
  message?: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_API_URL || '' }),
  endpoints: (builder) => ({
    verifyPhoneNumber: builder.mutation<VerifyPhoneResponse, string>({
      query: (phoneNumber) => ({
        url: 'auth/verify',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: { phoneNumber }
      })
    })
  })
});

export const { useVerifyPhoneNumberMutation } = authApi; // ✅ This should now exist
