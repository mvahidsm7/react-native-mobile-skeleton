import { env } from '@/config/env';
import { apiClient } from '@/services/api-client';
import type { LoginPayload, Session } from '@/types/auth';

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const authService = {
  async login(payload: LoginPayload): Promise<Session> {
    if (!payload.email.trim() || !payload.password.trim()) {
      throw new Error('Email dan password wajib diisi.');
    }

    if (env.useMockApi) {
      await wait(600);

      return {
        token: 'mock-access-token',
        user: {
          id: '1',
          name: 'Pengguna Demo',
          email: payload.email.trim().toLowerCase(),
        },
      };
    }

    return apiClient.post<Session>('/auth/login', {
      email: payload.email.trim().toLowerCase(),
      password: payload.password,
    });
  },
};
