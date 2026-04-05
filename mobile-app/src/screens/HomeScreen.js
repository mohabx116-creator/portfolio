import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ScreenContainer from '../components/ScreenContainer';
import SectionHeader from '../components/SectionHeader';
import TagBadge from '../components/TagBadge';
import { useAppSettings } from '../context/AppSettingsContext';
import { projectImages } from '../data/content';
import { getTextAlign } from '../utils/layout';

function HomeScreen({ navigation }) {
  const { t, palette, isRTL } = useAppSettings();

  return (
    <ScreenContainer>
      <View style={styles.topGap} />
      <LinearGradient colors={palette.cardGradient} style={[styles.heroCard, { borderColor: palette.border }]}>
        <View style={[styles.heroGlow, { backgroundColor: palette.heroGlow }]} />
        <Text style={[styles.kicker, { color: palette.accent, textAlign: getTextAlign(isRTL) }]}>{t.home.badge}</Text>
        <Text style={[styles.name, { color: palette.text, textAlign: getTextAlign(isRTL) }]}>{t.common.brand}</Text>
        <Text style={[styles.role, { color: palette.textMuted, textAlign: getTextAlign(isRTL) }]}>{t.common.role}</Text>
        <Text style={[styles.headline, { color: palette.text, textAlign: getTextAlign(isRTL) }]}>{t.home.introTitle}</Text>
        <Text style={[styles.description, { color: palette.textMuted, textAlign: getTextAlign(isRTL) }]}>{t.home.introBody}</Text>

        <View style={styles.buttonRow}>
          <Pressable onPress={() => navigation.navigate('Projects')} style={[styles.primaryButton, { backgroundColor: palette.accentStrong }]}>
            <Text style={styles.primaryButtonText}>{t.common.viewWork}</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Contact')} style={[styles.secondaryButton, { backgroundColor: palette.surfaceElevated, borderColor: palette.border }]}>
            <Text style={[styles.secondaryButtonText, { color: palette.text }]}>{t.common.contactMe}</Text>
          </Pressable>
        </View>

        <View style={styles.badges}>
          {t.home.trustBadges.map((badge) => (
            <TagBadge key={badge} label={badge} />
          ))}
        </View>
      </LinearGradient>

      <View style={[styles.previewCard, { backgroundColor: palette.surface, borderColor: palette.border, shadowColor: palette.shadow }]}>
        <Image source={projectImages.heroPromo} style={styles.previewImage} resizeMode="cover" />
      </View>

      <SectionHeader title={t.common.aboutMe} subtitle={t.home.aboutCardBody} />

      <Pressable onPress={() => navigation.navigate('About')} style={[styles.aboutCard, { backgroundColor: palette.surface, borderColor: palette.border, shadowColor: palette.shadow }]}>
        <Text style={[styles.aboutTitle, { color: palette.text, textAlign: getTextAlign(isRTL) }]}>{t.home.aboutCardTitle}</Text>
        <Text style={[styles.aboutBody, { color: palette.textMuted, textAlign: getTextAlign(isRTL) }]}>{t.about.body}</Text>
      </Pressable>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  topGap: { height: 10 },
  heroCard: { borderRadius: 32, padding: 24, gap: 10, borderWidth: 1, overflow: 'hidden' },
  heroGlow: { position: 'absolute', width: 180, height: 180, borderRadius: 999, top: -40, right: -40 },
  kicker: { fontSize: 11, fontWeight: '800', letterSpacing: 2.2, textTransform: 'uppercase' },
  name: { fontSize: 38, fontWeight: '900', letterSpacing: -0.8 },
  role: { fontSize: 15, fontWeight: '700' },
  headline: { marginTop: 8, fontSize: 24, lineHeight: 30, fontWeight: '900', letterSpacing: -0.6 },
  description: { marginTop: 6, fontSize: 15, lineHeight: 25, maxWidth: '96%' },
  buttonRow: { marginTop: 14, flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  primaryButton: { minHeight: 52, borderRadius: 20, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' },
  primaryButtonText: { color: '#fff', fontSize: 14, fontWeight: '800' },
  secondaryButton: { minHeight: 52, borderRadius: 20, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1 },
  secondaryButtonText: { fontSize: 14, fontWeight: '800' },
  badges: { marginTop: 12, flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  previewCard: { marginTop: 22, borderRadius: 30, padding: 10, borderWidth: 1, shadowOffset: { width: 0, height: 14 }, shadowOpacity: 0.16, shadowRadius: 28, elevation: 4 },
  previewImage: { width: '100%', height: 244, borderRadius: 24 },
  aboutCard: { marginTop: 18, borderRadius: 26, padding: 20, gap: 12, borderWidth: 1, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.14, shadowRadius: 26, elevation: 3 },
  aboutTitle: { fontSize: 19, fontWeight: '900', letterSpacing: -0.3 },
  aboutBody: { fontSize: 14, lineHeight: 24 },
});

export default HomeScreen;
