import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAppSettings } from '../context/AppSettingsContext';
import { getRowDirection, getTextAlign } from '../utils/layout';

function ContactCard({ item, onPress }) {
  const { palette, isRTL } = useAppSettings();

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.95 : 1, transform: [{ scale: pressed ? 0.99 : 1 }] }]}>
      <View style={[styles.card, { backgroundColor: palette.surface, shadowColor: palette.shadow, borderColor: palette.border }]}>
        <View style={[styles.row, { flexDirection: getRowDirection(isRTL) }]}>
          <View style={[styles.iconWrap, { backgroundColor: palette.accentSoft }]}>
            <Ionicons name={item.icon} size={20} color={palette.accent} />
          </View>
          <View style={styles.info}>
            <Text style={[styles.label, { color: palette.text, textAlign: getTextAlign(isRTL) }]}>{item.label}</Text>
            <Text style={[styles.value, { color: palette.textMuted, textAlign: getTextAlign(isRTL) }]}>{item.value}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 26,
    padding: 18,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.13,
    shadowRadius: 24,
    elevation: 3,
  },
  row: { alignItems: 'center', gap: 14 },
  iconWrap: {
    width: 46,
    height: 46,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: { flex: 1, gap: 4 },
  label: { fontSize: 16, fontWeight: '900' },
  value: { fontSize: 13, lineHeight: 21 },
});

export default ContactCard;
