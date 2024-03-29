import { useEffect } from "react";
import { Platform, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Toast from "react-native-toast-message";

import { ChangeInfo } from "./src/components/user-settings/change-user-info/change-info";
import { UserSettings } from "./src/components/user-settings/user-settings";
import { LandingScreen } from "./src/screens/landing-screen";
import { LoginScreen } from "./src/screens/login-screen";
import { SignUpScreen } from "./src/screens/signup-screen";

import { ErrorBoundary } from "./src/components/error-boundary/error-boundary";
import { RootStackParamList } from "./src/constants/routes";
import { HomeScreen } from "./src/screens/home-screen";
import { useCategoriesStore } from "./src/store/categories";
import { useUserAuthStore } from "./src/store/user-auth";
import { getUserFromStorage } from "./src/utils/async-storage";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
	const { user, setUser } = useUserAuthStore((state) => ({
		user: state.user,
		setUser: state.setUser,
	}));

	const { fetchCategories } = useCategoriesStore((state) => ({
		fetchCategories: state.fetchCategories,
	}));

	// biome-ignore lint/nursery/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const getUser = async () => {
			const user = await getUserFromStorage();
			if (user) {
				setUser(user);
			}
			fetchCategories();
		};
		getUser();
	}, [user?.id]);

	return (
		<>
			<StatusBar barStyle={Platform.OS === "android" ? "light-content" : "dark-content"} />
			<ErrorBoundary>
				<NavigationContainer>
					<Stack.Navigator initialRouteName={user ? "HOME_SCREEN" : "LANDING_SCREEN"}>
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
							<Stack.Screen
								options={{ headerShown: false }}
								name={"CHANGE_USER_INFO_SCREEN"}
								component={ChangeInfo}
							/>
						</Stack.Group>
					</Stack.Navigator>
				</NavigationContainer>
				<Toast />
			</ErrorBoundary>
		</>
	);
}
