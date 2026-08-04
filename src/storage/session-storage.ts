import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import type { Session } from '@/types/auth';

const SESSION_KEY = 'mobile-skeleton.session';

type WebStorage = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
};

function getWebStorage(): WebStorage | null {
  if (Platform.OS !== 'web') {
    return null;
  }

  const storage = (globalThis as typeof globalThis & { localStorage?: WebStorage }).localStorage;
  return storage ?? null;
}

export async function saveSession(session: Session): Promise<void> {
  const value = JSON.stringify(session);
  const webStorage = getWebStorage();

  if (webStorage) {
    webStorage.setItem(SESSION_KEY, value);
    return;
  }

  await SecureStore.setItemAsync(SESSION_KEY, value);
}

export async function loadSession(): Promise<Session | null> {
  const webStorage = getWebStorage();
  const value = webStorage
    ? webStorage.getItem(SESSION_KEY)
    : await SecureStore.getItemAsync(SESSION_KEY);

  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as Session;
  } catch {
    await clearSession();
    return null;
  }
}

export async function clearSession(): Promise<void> {
  const webStorage = getWebStorage();

  if (webStorage) {
    webStorage.removeItem(SESSION_KEY);
    return;
  }

  await SecureStore.deleteItemAsync(SESSION_KEY);
}
