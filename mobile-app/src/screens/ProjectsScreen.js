import { Animated, Easing, StyleSheet, View } from 'react-native';
import { useEffect, useRef } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { useAppSettings } from '../context/AppSettingsContext';
import { projectImages } from '../data/content';

function ProjectsScreen({ navigation }) {
  const { t } = useAppSettings();
  const entrance = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(entrance, {
      toValue: 1,
      duration: 420,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [entrance]);

  const projects = t.projects.items.map((item) => ({
    ...item,
    coverImage: projectImages[item.previews[0]],
  }));

  return (
    <ScreenContainer>
      <SectionHeader title={t.projects.title} subtitle={t.projects.subtitle} />
      <View style={styles.list}>
        {projects.map((project, index) => (
          <Animated.View
            key={project.id}
            style={{
              opacity: entrance,
              transform: [
                {
                  translateY: entrance.interpolate({
                    inputRange: [0, 1],
                    outputRange: [18 + index * 4, 0],
                  }),
                },
              ],
            }}
          >
            <ProjectCard project={project} onPress={() => navigation.navigate('ProjectDetails', { projectId: project.id })} />
          </Animated.View>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: { marginTop: 20, gap: 18 },
});

export default ProjectsScreen;
