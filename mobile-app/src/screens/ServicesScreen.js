import { StyleSheet, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { useAppSettings } from '../context/AppSettingsContext';

function ServicesScreen() {
  const { t } = useAppSettings();

  return (
    <ScreenContainer>
      <SectionHeader title={t.services.title} subtitle={t.services.subtitle} />
      <View style={styles.grid}>
        {t.services.items.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  grid: { marginTop: 18, gap: 14 },
});

export default ServicesScreen;
