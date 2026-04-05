import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppSettings } from '../context/AppSettingsContext';
import { getTextAlign } from '../utils/layout';
import TagBadge from './TagBadge';

function ProjectCard({ project, onPress }) {
  const { palette, isRTL, t } = useAppSettings();
  const pillSide = isRTL ? { left: 14 } : { right: 14 };
  const footerDirection = isRTL ? styles.footerRtl : styles.footerLtr;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { transform: [{ scale: pressed ? 0.985 : 1 }], opacity: pressed ? 0.97 : 1 },
      ]}
    >
      <View style={[styles.card, { backgroundColor: palette.surface, shadowColor: palette.shadow, borderColor: palette.border }]}>
        <View style={styles.imageWrap}>
          <Image source={project.coverImage} style={styles.image} resizeMode="cover" />
          <LinearGradient colors={['transparent', 'rgba(7,17,31,0.88)']} style={styles.overlay} />
          <View style={[styles.categoryPill, pillSide, { backgroundColor: palette.surfaceOverlay }]}>
            <Text style={styles.categoryText}>{project.category}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, { color: palette.text, textAlign: getTextAlign(isRTL) }]}>{project.title}</Text>
          <Text style={[styles.description, { color: palette.textMuted, textAlign: getTextAlign(isRTL) }]}>{project.description}</Text>
          <View style={[styles.footer, footerDirection]}>
            <TagBadge label={project.tags[0]} />
            <Text style={[styles.linkText, { color: palette.accent, textAlign: getTextAlign(isRTL) }]}>{t.common.viewDetails}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.16,
    shadowRadius: 30,
    elevation: 5,
  },
  imageWrap: { height: 236, position: 'relative' },
  image: { width: '100%', height: '100%' },
  overlay: { ...StyleSheet.absoluteFillObject },
  categoryPill: {
    position: 'absolute',
    top: 14,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  categoryText: { color: '#fff', fontSize: 10, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.4 },
  content: { padding: 20, gap: 10 },
  title: { fontSize: 21, fontWeight: '900', letterSpacing: -0.4 },
  description: { fontSize: 14, lineHeight: 23 },
  footer: { marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  footerLtr: { flexDirection: 'row' },
  footerRtl: { flexDirection: 'row-reverse' },
  linkText: { fontSize: 13, fontWeight: '800', letterSpacing: 0.1 },
});

export default ProjectCard;
