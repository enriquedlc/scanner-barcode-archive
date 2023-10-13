import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { BLUE_PALLETE } from "../../../constants/colors/colors";
import { FONT_SIZES } from "../../../constants/font";

export function UpdateUserInfoButton() {
	return (
		<TouchableOpacity style={styles.updateUserInfoButton}>
			<Text style={styles.updateUserInfoButtonText}>Save</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	updateUserInfoButton: {
		backgroundColor: BLUE_PALLETE.BLUE,

		padding: 10,
		borderRadius: 5,
		width: "90%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 50,
	},
	updateUserInfoButtonText: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.PRIMARY_WHITE,
		fontWeight: "bold",
	},
});
