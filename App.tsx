import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LandingScreen } from "./src/screens/landing-screen";
import { LoginScreen } from "./src/screens/login-screen";
import { SignUpScreen } from "./src/screens/signup-screen";

import { RootStackParamList } from "./src/constants/routes";
import { HomeScreen } from "./src/screens/home-screen";

import Toast from "react-native-toast-message";
import { User, useUserAuthStore } from "./src/store/user-auth";
import { useEffect } from "react";
import { getUserFromAsyncStorage } from "./src/utils/async-storage";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const { user, setUser } = useUserAuthStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));

  // TODO: logout and test this
  useEffect(() => {
    const getUser = async () => {
      const user = await getUserFromAsyncStorage();
      setUser(user as User);
    };
    getUser();
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
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </SafeAreaProvider>
  );
}
