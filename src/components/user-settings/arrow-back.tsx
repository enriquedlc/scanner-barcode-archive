import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { ARROW_BACK } from "../../../assets/profile-images";

import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useUserPreferencesStore } from "../../store/user-preferences";

export function ArrowBack() {
	const { navigation } = useAppNavigation();

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	return (
		<View
			style={[
				styles.arrowBackContainer,
				{
					backgroundColor: colorScheme.MAIN,
				},
			]}
		>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Image style={styles.arrowBack} source={ARROW_BACK} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	arrowBackContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		borderRadius: 50,
		height: 40,
		width: 40,
	},
	arrowBack: {
		tintColor: "white",
		objectFit: "contain",
		width: 35,
		height: 35,
	},
});
