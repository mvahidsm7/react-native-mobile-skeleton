import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { Screen } from '@/components/ui/Screen';
import { colors } from '@/constants/colors';

export default function NotFoundScreen() {
  return (
    <Screen contentContainerStyle={styles.container}>
      <Text style={styles.title}>Halaman tidak ditemukan</Text>
      <Link href="/" style={styles.link}>
        Kembali ke halaman awal
      </Link>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  link: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
});
