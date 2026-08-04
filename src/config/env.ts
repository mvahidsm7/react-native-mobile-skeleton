const rawApiUrl = process.env.EXPO_PUBLIC_API_URL?.trim() ?? '';

export const env = {
  apiUrl: rawApiUrl.replace(/\/$/, ''),
  useMockApi: process.env.EXPO_PUBLIC_USE_MOCK_API !== 'false',
} as const;
