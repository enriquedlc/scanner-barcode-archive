import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { useAppNavigation } from "../../hooks/useAppNavigation";

import { ARROW_BACK } from "../../../assets/profile-images";
import { BLUE_PALLETE } from "../../constants/colors/colors";
import { FONT_SIZES } from "../../constants/font";

export function UserSettings() {
	const { navigation } = useAppNavigation();

	return (
		<View>
			<View style={styles.arrowBackContainer}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image style={styles.arrowBack} source={ARROW_BACK} />
				</TouchableOpacity>
			</View>
			<View style={styles.settings}>
				<Text style={styles.accountSettingsText}>Account Information</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	arrowBackContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: BLUE_PALLETE.BLUE,
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
	settings: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
	},
	accountSettingsText: {
		fontSize: FONT_SIZES.EXTRA_EXTRA_LARGE,
		fontWeight: "bold",
	},
});
