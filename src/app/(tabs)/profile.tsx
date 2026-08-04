import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Screen } from '@/components/ui/Screen';
import { colors } from '@/constants/colors';
import { useSession } from '@/context/session-context';

export default function ProfileScreen() {
  const { session, signOut } = useSession();

  return (
    <Screen contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Nama</Text>
        <Text style={styles.value}>{session?.user.name ?? '-'}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{session?.user.email ?? '-'}</Text>
      </View>

      <Button label="Keluar" variant="secondary" onPress={() => void signOut()} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  card: {
    gap: 8,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    backgroundColor: colors.surface,
    padding: 20,
  },
  label: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  value: {
    marginBottom: 12,
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
});
