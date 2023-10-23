import { StyleSheet } from "react-native";

import { FONT_SIZES } from "../../constants/font";

export const loginStyles = StyleSheet.create({
	loginContainer: {
		flex: 1,
		backgroundColor: "transparent",
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: 30,
		gap: 25,
	},
	formTitle: {
		fontSize: FONT_SIZES.EXTRA_EXTRA_LARGE,
		fontWeight: "800",
	},
	inputContainer: {
		borderColor: "black",
		minWidth: "65%",
	},
	inputLabel: {
		fontSize: FONT_SIZES.LARGE,
		fontWeight: "600",
		paddingBottom: 5,
	},
	input: {
		fontSize: FONT_SIZES.LARGE,

		fontWeight: "300",
		paddingVertical: 7,
		borderRadius: 5,
		paddingLeft: 10,
	},
});
