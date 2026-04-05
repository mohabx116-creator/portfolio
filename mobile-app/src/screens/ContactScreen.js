import { Alert, Linking, StyleSheet, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import SectionHeader from '../components/SectionHeader';
import ContactCard from '../components/ContactCard';
import { useAppSettings } from '../context/AppSettingsContext';

function ContactScreen() {
  const { t } = useAppSettings();

  const openLink = async (url) => {
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
      Alert.alert('Link Error', 'Unable to open this link on the current device.');
      return;
    }

    Linking.openURL(url);
  };

  return (
    <ScreenContainer>
      <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />
      <View style={styles.list}>
        {t.contact.items.map((item) => (
          <ContactCard key={item.id} item={item} onPress={() => openLink(item.url)} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: { marginTop: 20, gap: 14 },
});

export default ContactScreen;
