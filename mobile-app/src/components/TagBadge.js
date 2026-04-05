import { StyleSheet, Text, View } from 'react-native';
import { useAppSettings } from '../context/AppSettingsContext';

function TagBadge({ label }) {
  const { palette } = useAppSettings();

  return (
    <View style={[styles.badge, { backgroundColor: palette.accentSoft }]}>
      <Text style={[styles.label, { color: palette.accent }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999 },
  label: { fontSize: 12, fontWeight: '800' },
});

export default TagBadge;
