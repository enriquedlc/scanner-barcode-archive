import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LandingScreen } from "./src/screens/landing-screen";

import { ROUTES } from "./src/constants/routes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ animationEnabled: true }}
          initialRouteName={ROUTES.LANDING}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name={ROUTES.LANDING}
            component={LandingScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
