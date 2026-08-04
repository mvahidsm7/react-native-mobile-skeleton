import { Redirect, Stack } from 'expo-router';

import { useSession } from '@/context/session-context';

export default function AuthLayout() {
  const { session, isLoading } = useSession();

  if (!isLoading && session) {
    return <Redirect href="/home" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
