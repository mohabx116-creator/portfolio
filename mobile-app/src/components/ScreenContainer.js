import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppSettings } from '../context/AppSettingsContext';

function ScreenContainer({ children, scroll = true, contentContainerStyle, padded = true }) {
  const { palette } = useAppSettings();

  const inner = (
    <View style={[styles.inner, padded && styles.padded, contentContainerStyle]}>
      {children}
    </View>
  );

  return (
    <LinearGradient colors={[palette.background, palette.surface]} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        {scroll ? (
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} bounces>
            {inner}
          </ScrollView>
        ) : inner}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safeArea: { flex: 1 },
  scrollContent: { flexGrow: 1, paddingTop: 6 },
  inner: { flex: 1 },
  padded: { paddingHorizontal: 20, paddingBottom: 34 },
});

export default ScreenContainer;
