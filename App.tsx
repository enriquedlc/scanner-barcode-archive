import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LandingScreen } from "./src/screens/landing-screen";
import { LoginScreen } from "./src/screens/login-screen";
import { SignUpScreen } from "./src/screens/signup-screen";

import { RootStackParamList } from "./src/constants/routes";
import { HomeScreen } from "./src/screens/home-screen";
import { ProfileScreen } from "./src/screens/profile-screen";
import { User, useUserAuthStore } from "./src/store/user-auth";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const user = useUserAuthStore((state) => state.user);

  console.log("user", user);

  const isLoggedIn = (user: User | null) => user !== null;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ animationEnabled: true }}
          initialRouteName={"LANDING"}
        >
          {isLoggedIn(user) ? (
            <Stack.Group>
              <Stack.Screen
                options={{ headerShown: false }}
                name={"LANDING"}
                component={LandingScreen}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name={"LOGIN"}
                component={LoginScreen}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name={"SIGN_UP"}
                component={SignUpScreen}
              />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                options={{ headerShown: false }}
                name={"HOME"}
                component={HomeScreen}
              />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
