import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useAppNavigation } from "../../hooks/useAppNavigation";

import { ARROW_BACK } from "../../../assets/profile-images";
import { BLUE_PALLETE } from "../../constants/colors/colors";
import { FONT_SIZES } from "../../constants/font";
import { UserProfilePhoto } from "../profile/profile-info-card";

export function UserSettings() {
	const { navigation } = useAppNavigation();

	return (
		<View>
			<View style={styles.arrowBackContainer}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image style={styles.arrowBack} source={ARROW_BACK} />
				</TouchableOpacity>
			</View>
			<Text style={styles.accountSettingsText}>Account Information</Text>
			<UserProfilePhoto />
			<View style={styles.settingsBasicInformationContainer}>
				<Text style={styles.basicInformationText}>Basic information</Text>
				<View style={styles.basicInformationItem}>
					<Text style={styles.userSettingLabel}>Username</Text>
					<Text style={styles.userSettingValue}>Email</Text>
				</View>
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
	accountSettingsText: {
		fontSize: FONT_SIZES.EXTRA_EXTRA_LARGE,
		fontWeight: "bold",
		textAlign: "center",
		paddingBottom: 30,
	},
	settingsBasicInformationContainer: {
		display: "flex",
		alignItems: "flex-start",
		paddingTop: 30,
		paddingLeft: 30,
	},
	basicInformationItem: {
		display: "flex",
		alignItems: "flex-start",
		width: "80%",
		borderBottomColor: BLUE_PALLETE.GRAY,
		borderBottomWidth: 1,
	},
	basicInformationText: {
		fontSize: FONT_SIZES.EXTRA_LARGE,
		fontWeight: "bold",
		paddingBottom: 30,
	},
	userSettingLabel: {
		fontSize: FONT_SIZES.LARGE,
		paddingBottom: 10,
	},
	userSettingValue: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.SECONDARY_BLACK,
		paddingBottom: 7,
	},
});
