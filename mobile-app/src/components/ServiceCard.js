import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { useAppSettings } from '../context/AppSettingsContext';
import { getTextAlign } from '../utils/layout';

function ServiceCard({ title, description, icon }) {
  const { palette, isRTL } = useAppSettings();

  return (
    <View style={[styles.card, { backgroundColor: palette.surface, shadowColor: palette.shadow, borderColor: palette.border }]}>
      <View style={[styles.iconWrap, { backgroundColor: palette.accentSoft }]}>
        <Ionicons name={icon} size={20} color={palette.accent} />
      </View>
      <Text style={[styles.title, { color: palette.text, textAlign: getTextAlign(isRTL) }]}>{title}</Text>
      <Text style={[styles.description, { color: palette.textMuted, textAlign: getTextAlign(isRTL) }]}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 26,
    padding: 20,
    gap: 14,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.14,
    shadowRadius: 24,
    elevation: 3,
    borderWidth: 1,
  },
  iconWrap: {
    width: 46,
    height: 46,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 18, fontWeight: '900', letterSpacing: -0.2 },
  description: { fontSize: 14, lineHeight: 23 },
});

export default ServiceCard;
