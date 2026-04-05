import { Pressable, StyleSheet, Text } from 'react-native';
import { useAppSettings } from '../context/AppSettingsContext';

function LanguageToggle() {
  const { language, toggleLanguage, palette } = useAppSettings();

  return (
    <Pressable
      onPress={toggleLanguage}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: palette.surfaceElevated,
          borderColor: palette.border,
          transform: [{ scale: pressed ? 0.97 : 1 }],
          opacity: pressed ? 0.92 : 1,
        },
      ]}
    >
      <Text style={[styles.text, { color: palette.text }]}>{language === 'ar' ? 'EN' : 'AR'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { minHeight: 42, minWidth: 58, borderRadius: 21, paddingHorizontal: 14, alignItems: 'center', justifyContent: 'center', borderWidth: 1 },
  text: { fontSize: 12, fontWeight: '800', letterSpacing: 0.3 },
});

export default LanguageToggle;
