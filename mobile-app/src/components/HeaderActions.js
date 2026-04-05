import { StyleSheet, View } from 'react-native';
import { useAppSettings } from '../context/AppSettingsContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

function HeaderActions() {
  const { isRTL } = useAppSettings();

  return (
    <View style={[styles.row, isRTL && styles.rowRtl]}>
      <LanguageToggle />
      <ThemeToggle />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  rowRtl: { flexDirection: 'row-reverse' },
});

export default HeaderActions;
