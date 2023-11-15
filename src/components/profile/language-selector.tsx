import { Image, StyleSheet, Text, View } from "react-native";
import { LANGUAGE_FLAGS } from "../../../assets";
import { WORLD } from "../../../assets/profile-images";
import { profileStyles } from "../../screens/profile-screen/profile-styles";
import { useUserPreferencesStore } from "../../store/user-preferences";

export function LanguageSelector() {
	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	return (
		<View>
			<View style={{ flexDirection: "row" }}>
				<Text
					style={[
						profileStyles.profileDefaultLabel,
						{
							color: colorScheme.SECONDARY_BLACK,
						},
					]}
				>
					Idioma
				</Text>
				<Image source={WORLD} style={profileStyles.profileIcon} />
			</View>
			<View style={languageSelector.languageFlagsContainer}>
				<Image
					style={languageSelector.languageFlag}
					source={LANGUAGE_FLAGS.SPANISH_SPAIN}
					alt="ESPAÑOL"
				/>
				<Image
					style={languageSelector.languageFlag}
					source={LANGUAGE_FLAGS.ENGLISH_USA}
					alt="ESPAÑOL"
				/>
			</View>
		</View>
	);
}

const languageSelector = StyleSheet.create({
	languageFlagsContainer: {
		flexDirection: "row",
		gap: 40,
	},
	languageFlag: {
		width: 50,
		height: 50,
		objectFit: "contain",
	},
});
