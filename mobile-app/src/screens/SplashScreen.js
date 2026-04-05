import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppSettings } from '../context/AppSettingsContext';

function SplashScreen({ navigation }) {
  const { t, palette, isReady } = useAppSettings();

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 1400);

    return () => clearTimeout(timer);
  }, [isReady, navigation]);

  return (
    <LinearGradient colors={[palette.background, palette.surface, palette.surfaceElevated]} style={styles.container}>
      <View style={[styles.badge, { backgroundColor: palette.accentSoft }]}>
        <Text style={[styles.badgeText, { color: palette.accent }]}>{t.common.appTitle}</Text>
      </View>
      <Text style={[styles.title, { color: palette.text }]}>{t.splash.title}</Text>
      <Text style={[styles.subtitle, { color: palette.textMuted }]}>{t.splash.subtitle}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12, paddingHorizontal: 24 },
  badge: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999 },
  badgeText: { fontSize: 12, fontWeight: '800', letterSpacing: 1.6, textTransform: 'uppercase' },
  title: { fontSize: 42, fontWeight: '900' },
  subtitle: { fontSize: 18, fontWeight: '600' },
});

export default SplashScreen;
