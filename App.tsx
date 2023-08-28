import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LandingScreen } from "./src/screens/landing-screen";
import { LoginScreen } from "./src/screens/login-screen";
import { SignUpScreen } from "./src/screens/signup-screen";

import { RootStackParamList } from "./src/constants/routes";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ animationEnabled: true }}
          initialRouteName={"LANDING"}
        >
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
