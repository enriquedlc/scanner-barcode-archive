import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRef, useState } from "react";
import { Animated, Image, Platform, View } from "react-native";
import "react-native-gesture-handler";

import { ProfileScreen } from "../../screens/profile-screen/profile-screen";
import { BarcodeScanner } from "../barcode-scanner/barcode-scanner";
import { Export } from "../export/export";
import { Home } from "../home/home";
import { Search } from "../search/search";

import { useAppNavigation } from "../../hooks/useAppNavigation";
import { getColor, getWidth } from "../../utils/utils";

import { BARCODE, NAVBAR_ICONS } from "../../../assets";
import { useUserPreferencesStore } from "../../store/user-preferences";

const Tab = createBottomTabNavigator();

export function Navbar() {
	const { navigation } = useAppNavigation();

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	const [isOnFocusableTap, setIsOnFocusableTab] = useState(true);
	const tabOffsetValue = useRef(new Animated.Value(0)).current;

	return (
		<>
			<Tab.Navigator
				initialRouteName="HOME"
				screenOptions={{
					headerShown: false,
					tabBarShowLabel: false,
					tabBarStyle: {
						backgroundColor: colorScheme.PRIMARY_WHITE,
						position: "relative",
						minWidth: "95%",
						bottom: 25,
						marginHorizontal: 20,
						height: 60,
						borderRadius: 10,
						shadowColor: "#000",
						shadowOpacity: 0.2,
						shadowOffset: {
							width: 10,
							height: 10,
						},
						elevation: 10,
						paddingHorizontal: 20,
						alignSelf: "center",
					},
				}}
			>
				<Tab.Screen
					name={"HOME"}
					component={Home}
					options={{
						tabBarIcon: ({ focused }) => (
							<View
								style={{
									position: "absolute",
									top: 20,
								}}
							>
								<FontAwesome5 name="home" size={20} color={getColor(focused)} />
							</View>
						),
					}}
					listeners={({ navigation }) => ({
						tabPress: () => {
							Animated.spring(tabOffsetValue, {
								toValue: 0,
								useNativeDriver: true,
							}).start();
							navigation.navigate("HOME");
							setIsOnFocusableTab(true);
						},
					})}
				/>

				<Tab.Screen
					name={"SEARCH"}
					component={Search}
					options={{
						tabBarIcon: ({ focused }) => (
							<View
								style={{
									position: "absolute",
									top: 20,
								}}
							>
								<FontAwesome5 name="search" size={20} color={getColor(focused)} />
							</View>
						),
					}}
					listeners={() => ({
						tabPress: () => {
							Animated.spring(tabOffsetValue, {
								toValue: getWidth() + 1,
								useNativeDriver: true,
							}).start();
							setIsOnFocusableTab(true);
						},
					})}
				/>
				<Tab.Screen
					name={"BARCODE_SCANNER"}
					component={BarcodeScanner}
					options={{
						tabBarIcon: () => (
							<View
								style={{
									width: 55,
									height: 55,
									backgroundColor: colorScheme.MAIN,
									borderRadius: 30,
									justifyContent: "center",
									alignItems: "center",
									marginBottom: Platform.OS === "android" ? 50 : 30,
								}}
							>
								<Image
									source={BARCODE.SCANNABLE_BARCODE}
									style={{
										width: 25,
										height: 25,
										tintColor: "white",
									}}
									alt="plus"
								/>
							</View>
						),
					}}
					listeners={() => ({
						tabPress: () => {
							setIsOnFocusableTab(false);
						},
					})}
				/>
				<Tab.Screen
					name={"EXPORT"}
					component={Export}
					options={{
						tabBarIcon: ({ focused }) => (
							<View
								style={{
									position: "absolute",
									top: 20,
								}}
							>
								<Image
									source={NAVBAR_ICONS.FILE_EXPORT}
									style={{
										width: 22,
										height: 22,
										tintColor: getColor(focused),
									}}
								/>
							</View>
						),
					}}
					listeners={() => ({
						tabPress: () => {
							Animated.spring(tabOffsetValue, {
								toValue: getWidth() * 3 + 12,
								useNativeDriver: true,
							}).start();
							setIsOnFocusableTab(true);
						},
					})}
				/>

				<Tab.Screen
					name={"PROFILE_SCREEN"}
					component={ProfileScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<View
								style={{
									position: "absolute",
									top: 20,
								}}
							>
								<FontAwesome5 name="user-alt" size={20} color={getColor(focused)} />
							</View>
						),
					}}
					listeners={() => ({
						tabPress: () => {
							Animated.spring(tabOffsetValue, {
								toValue: getWidth() * 4 + 16,
								useNativeDriver: true,
							}).start();
							navigation.navigate("PROFILE_SCREEN");
							setIsOnFocusableTab(true);
						},
					})}
				/>
			</Tab.Navigator>
			{isOnFocusableTap && (
				<Animated.View
					style={{
						width: 40,
						height: 2,
						backgroundColor: colorScheme.MAIN,
						position: "absolute",
						bottom: 83,
						left: "11.5%",
						borderRadius: 20,
						transform: [{ translateX: tabOffsetValue }],
					}}
				/>
			)}
		</>
	);
}
