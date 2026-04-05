import { StyleSheet, Text, View } from 'react-native';
import { useAppSettings } from '../context/AppSettingsContext';
import { getTextAlign } from '../utils/layout';

function SectionHeader({ eyebrow, title, subtitle }) {
  const { palette, isRTL } = useAppSettings();

  return (
    <View style={styles.wrapper}>
      {eyebrow ? <Text style={[styles.eyebrow, { color: palette.accent, textAlign: getTextAlign(isRTL) }]}>{eyebrow}</Text> : null}
      <Text style={[styles.title, { color: palette.text, textAlign: getTextAlign(isRTL) }]}>{title}</Text>
      {subtitle ? <Text style={[styles.subtitle, { color: palette.textMuted, textAlign: getTextAlign(isRTL) }]}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 10, marginTop: 8 },
  eyebrow: { fontSize: 11, fontWeight: '800', letterSpacing: 2.2, textTransform: 'uppercase' },
  title: { fontSize: 30, fontWeight: '900', lineHeight: 36, letterSpacing: -0.6 },
  subtitle: { fontSize: 15, lineHeight: 25, maxWidth: '92%' },
});

export default SectionHeader;
