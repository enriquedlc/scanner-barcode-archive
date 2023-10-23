import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { BRUSH } from "../../../assets/profile-images";

import { GREEN_PALLETE, ORANGE_PALLETE, PURPLE_PALLETE } from "../../constants/colors/colors";
import { profileStyles } from "../../screens/profile-screen/profile-styles";
import { ColorPalette, useUserPreferencesStore } from "../../store/user-preferences";

export function ThemeSelector() {
	const { getColorScheme, setColorScheme } = useUserPreferencesStore((state) => state);
	const colorScheme = getColorScheme();

	const handleThemeChange = (colorScheme: ColorPalette) => {
		setColorScheme(colorScheme);
	};

	return (
		<View style={applicationThemeSelector.appThemeChangerLabelContainer}>
			<View style={{ flexDirection: "row" }}>
				<Text
					style={[
						profileStyles.profileDefaultLabel,
						{
							color: colorScheme.SECONDARY_BLACK,
						},
					]}
				>
					Tema de la applicación
				</Text>
				<Image source={BRUSH} style={profileStyles.profileIcon} />
			</View>
			<View style={applicationThemeSelector.themeColorsContainer}>
				<TouchableOpacity
					style={[
						applicationThemeSelector.themeColor,
						{ backgroundColor: colorScheme.MAIN },
					]}
					onPress={() => handleThemeChange(colorScheme)}
				/>
				<TouchableOpacity
					style={[
						applicationThemeSelector.themeColor,
						{ backgroundColor: ORANGE_PALLETE.MAIN },
					]}
					onPress={() => handleThemeChange(ORANGE_PALLETE)}
				/>
				<TouchableOpacity
					style={[
						applicationThemeSelector.themeColor,
						{ backgroundColor: PURPLE_PALLETE.MAIN },
					]}
					onPress={() => handleThemeChange(PURPLE_PALLETE)}
				/>
				<TouchableOpacity
					style={[
						applicationThemeSelector.themeColor,
						{ backgroundColor: GREEN_PALLETE.MAIN },
					]}
					onPress={() => handleThemeChange(GREEN_PALLETE)}
				/>
			</View>
		</View>
	);
}

const applicationThemeSelector = StyleSheet.create({
	appThemeChangerLabelContainer: {
		flexDirection: "column",
	},

	themeColorsContainer: {
		flexDirection: "row",
	},
	themeColor: {
		width: 30,
		height: 30,
		borderRadius: 100,
		borderWidth: 1,
		marginRight: 40,
		marginTop: 10,
	},
	themeColorSelected: {
		width: 30,
		height: 30,
		borderRadius: 100,
		borderWidth: 1,
		marginRight: 40,
		marginTop: 10,
		// borderColor: colorScheme.MAIN,
		// backgroundColor: colorScheme.MAIN,
	},
});
