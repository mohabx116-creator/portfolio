import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import SectionHeader from '../components/SectionHeader';
import { useAppSettings } from '../context/AppSettingsContext';
import { getTextAlign } from '../utils/layout';

function AboutScreen() {
  const { t, palette, isRTL } = useAppSettings();

  return (
    <ScreenContainer>
      <SectionHeader title={t.about.title} subtitle={t.about.body} />
      <View style={[styles.card, { backgroundColor: palette.surface, borderColor: palette.border, shadowColor: palette.shadow }]}>
        {t.about.points.map((item) => (
          <View key={item} style={[styles.pointCard, { backgroundColor: palette.surfaceElevated }]}>
            <Text style={[styles.pointText, { color: palette.text, textAlign: getTextAlign(isRTL) }]}>{item}</Text>
          </View>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: 16, borderRadius: 28, padding: 18, gap: 12, borderWidth: 1, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.14, shadowRadius: 24, elevation: 3 },
  pointCard: { borderRadius: 20, padding: 16 },
  pointText: { fontSize: 15, lineHeight: 24, fontWeight: '600' },
});

export default AboutScreen;
