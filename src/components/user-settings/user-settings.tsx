import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { FONT_SIZES } from "../../constants/font";
import { UserProfilePhoto } from "../profile/profile-info-card";
import { ArrowBack } from "./arrow-back";
import { UserInfoItem } from "./user-info-item";

export function UserSettings() {
	return (
		<SafeAreaView>
			<ArrowBack />
			<Text style={styles.accountSettingsText}>Account Information</Text>
			<UserProfilePhoto />
			<View style={styles.settingsBasicInformationContainer}>
				<Text style={styles.basicInformationText}>Basic information</Text>
				<UserInfoItem label={"username"} />
				<UserInfoItem label={"email"} />
				<UserInfoItem label={"password"} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
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
	basicInformationText: {
		fontSize: FONT_SIZES.EXTRA_LARGE,
		fontWeight: "bold",
		paddingBottom: 30,
	},
});
