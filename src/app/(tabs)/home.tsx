import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/ui/Screen';
import { colors } from '@/constants/colors';
import { useSession } from '@/context/session-context';

const modules = [
  ['Routing', 'Expo Router dengan pemisahan grup auth dan tabs.'],
  ['API', 'Fetch wrapper dengan timeout, token Bearer, dan error handling.'],
  ['Session', 'Penyimpanan sesi aman pada native dan localStorage pada web.'],
] as const;

export default function HomeScreen() {
  const { session } = useSession();

  return (
    <Screen scroll contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.greeting}>Halo, {session?.user.name ?? 'Pengguna'}</Text>
        <Text style={styles.title}>Skeleton siap dikembangkan</Text>
        <Text style={styles.subtitle}>
          Mulai tambahkan feature module, endpoint backend, validasi form, dan komponen desain aplikasi Anda.
        </Text>
      </View>

      <View style={styles.grid}>
        {modules.map(([title, description]) => (
          <View key={title} style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardText}>{description}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  hero: {
    gap: 10,
  },
  greeting: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
  },
  grid: {
    gap: 14,
  },
  card: {
    gap: 8,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    backgroundColor: colors.surface,
    padding: 18,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  cardText: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
});
