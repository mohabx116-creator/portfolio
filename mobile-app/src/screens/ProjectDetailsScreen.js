import { Image, StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import SectionHeader from '../components/SectionHeader';
import TagBadge from '../components/TagBadge';
import { useAppSettings } from '../context/AppSettingsContext';
import { projectImages } from '../data/content';
import { getTextAlign } from '../utils/layout';

function ProjectDetailsScreen({ route }) {
  const { projectId } = route.params;
  const { t, palette, isRTL } = useAppSettings();
  const project = t.projects.items.find((item) => item.id === projectId);
  const summaryDirection = isRTL ? styles.summaryHeadRtl : styles.summaryHeadLtr;
  const tagsDirection = isRTL ? styles.tagsRtl : styles.tagsLtr;

  if (!project) {
    return null;
  }

  return (
    <ScreenContainer>
      <SectionHeader eyebrow={project.category} title={project.title} subtitle={project.overview} />

      <View style={[styles.summaryCard, { backgroundColor: palette.surface, borderColor: palette.border, shadowColor: palette.shadow }]}>
        <View style={[styles.summaryHead, summaryDirection]}>
          <Text style={[styles.label, { color: palette.accent, textAlign: getTextAlign(isRTL) }]}>{t.common.caseStudy}</Text>
          <Text style={[styles.categoryPill, { color: palette.text }]}>{project.category}</Text>
        </View>
        <Text style={[styles.summaryText, { color: palette.textMuted, textAlign: getTextAlign(isRTL) }]}>{project.description}</Text>
      </View>

      <View style={styles.gallery}>
        {project.previews.map((preview) => (
          <View key={preview} style={[styles.imageCard, { backgroundColor: palette.surface, borderColor: palette.border, shadowColor: palette.shadow }]}>
            <Image source={projectImages[preview]} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </View>

      <View style={[styles.infoCard, { backgroundColor: palette.surface, borderColor: palette.border, shadowColor: palette.shadow }]}>
        <Text style={[styles.label, { color: palette.accent, textAlign: getTextAlign(isRTL) }]}>{t.common.highlights}</Text>
        <View style={styles.points}>
          {project.highlights.map((item) => (
            <View key={item} style={[styles.pointItem, { backgroundColor: palette.surfaceElevated }]}>
              <Text style={[styles.pointText, { color: palette.text, textAlign: getTextAlign(isRTL) }]}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.label, { color: palette.accent, textAlign: getTextAlign(isRTL), marginTop: 20 }]}>{t.common.tags}</Text>
        <View style={[styles.tags, tagsDirection]}>
          {project.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  summaryCard: { marginTop: 18, borderRadius: 26, padding: 18, borderWidth: 1, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.14, shadowRadius: 24, elevation: 3 },
  summaryHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  summaryHeadLtr: { flexDirection: 'row' },
  summaryHeadRtl: { flexDirection: 'row-reverse' },
  summaryText: { marginTop: 12, fontSize: 14, lineHeight: 24 },
  categoryPill: { fontSize: 12, fontWeight: '800' },
  gallery: { marginTop: 18, gap: 16 },
  imageCard: { borderRadius: 30, padding: 10, borderWidth: 1, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.15, shadowRadius: 26, elevation: 3 },
  image: { width: '100%', height: 250, borderRadius: 24 },
  infoCard: { marginTop: 20, borderRadius: 30, padding: 20, borderWidth: 1, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.15, shadowRadius: 26, elevation: 3 },
  label: { fontSize: 12, fontWeight: '800', letterSpacing: 1.8, textTransform: 'uppercase' },
  points: { marginTop: 14, gap: 10 },
  pointItem: { borderRadius: 20, padding: 15 },
  pointText: { fontSize: 14, lineHeight: 23, fontWeight: '600' },
  tags: { marginTop: 14, flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tagsLtr: { justifyContent: 'flex-start' },
  tagsRtl: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
});

export default ProjectDetailsScreen;
