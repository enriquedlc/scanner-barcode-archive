import { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Toast from "react-native-toast-message";

import { LandingScreen } from "./src/screens/landing-screen";
import { LoginScreen } from "./src/screens/login-screen";
import { SignUpScreen } from "./src/screens/signup-screen";
import { UserSettings } from "./src/components/user-settings/user-settings";

import { RootStackParamList } from "./src/constants/routes";
import { HomeScreen } from "./src/screens/home-screen";
import { User, useUserAuthStore } from "./src/store/user-auth";
import { getUserFromStorage } from "./src/utils/async-storage";
import { useArticlesStore } from "./src/store/articles";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const { user, setUser } = useUserAuthStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));

  const { fetchArticles } = useArticlesStore((state) => ({
    fetchArticles: state.fetchArticles,
  }));

  // TODO: extract to a custom hook
  useEffect(() => {
    const getUser = async () => {
      const user = await getUserFromStorage();
      if (user) {
        setUser(user as User);
      }
    };
    console.log("user", user);
    getUser().then(() => fetchArticles(user?.id as User["id"]));
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ animationEnabled: true }}
          initialRouteName={user ? "HOME_SCREEN" : "LANDING_SCREEN"}
        >
          <Stack.Group>
            <Stack.Screen
              options={{ headerShown: false }}
              name={"LANDING_SCREEN"}
              component={LandingScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name={"LOGIN_SCREEN"}
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name={"SIGN_UP_SCREEN"}
              component={SignUpScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name={"HOME_SCREEN"}
              component={HomeScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name={"USER_SETTINGS_SCREEN"}
              component={UserSettings}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </SafeAreaProvider>
  );
}
