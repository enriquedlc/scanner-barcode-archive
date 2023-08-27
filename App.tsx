import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LandingScreen } from "./src/screens/landing-screen";

import { ROUTES } from "./src/constants/routes";
import { useCallback } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Cascadia-code": require("./assets/fonts/CascadiaCodePL-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
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
