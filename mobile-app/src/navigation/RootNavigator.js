import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ContactScreen from '../screens/ContactScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';
import { useAppSettings } from '../context/AppSettingsContext';
import HeaderActions from '../components/HeaderActions';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const { t, palette } = useAppSettings();

  const screenOptions = ({ route }) => ({
    headerStyle: { backgroundColor: palette.surface },
    headerShadowVisible: false,
    headerTitleStyle: { color: palette.text, fontWeight: '800' },
    headerTintColor: palette.text,
    headerRight: () => <HeaderActions />,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: 14,
      backgroundColor: palette.surfaceOverlay,
      borderTopColor: 'transparent',
      height: 74,
      paddingTop: 8,
      paddingBottom: 10,
      borderRadius: 26,
      shadowColor: palette.shadow,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.18,
      shadowRadius: 20,
      elevation: 10,
    },
    tabBarActiveTintColor: palette.accent,
    tabBarInactiveTintColor: palette.textMuted,
    tabBarActiveBackgroundColor: palette.accentSoft,
    tabBarItemStyle: {
      marginHorizontal: 4,
      marginVertical: 6,
      borderRadius: 18,
    },
    tabBarLabelStyle: { fontSize: 11, fontWeight: '800', marginTop: 2 },
    tabBarIcon: ({ color, size, focused }) => {
      const icons = {
        Home: focused ? 'home' : 'home-outline',
        Services: focused ? 'layers' : 'layers-outline',
        Projects: focused ? 'albums' : 'albums-outline',
        Contact: focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline',
      };

      return <Ionicons name={icons[route.name]} size={size} color={color} />;
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: t.tabs.home }} />
      <Tab.Screen name="Services" component={ServicesScreen} options={{ title: t.tabs.services }} />
      <Tab.Screen name="Projects" component={ProjectsScreen} options={{ title: t.tabs.projects }} />
      <Tab.Screen name="Contact" component={ContactScreen} options={{ title: t.tabs.contact }} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { t, palette } = useAppSettings();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: { backgroundColor: palette.surface },
        headerShadowVisible: false,
        headerTitleStyle: { color: palette.text, fontWeight: '800' },
        headerTintColor: palette.text,
        contentStyle: { backgroundColor: palette.background },
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ title: t.common.aboutMe, headerRight: () => <HeaderActions /> }} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} options={{ title: t.common.caseStudy, headerRight: () => <HeaderActions /> }} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
