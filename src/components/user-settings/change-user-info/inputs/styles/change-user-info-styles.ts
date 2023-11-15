import { StyleSheet } from "react-native";

import { FONT_SIZES } from "../../../../../constants/font";

export const changeUserInfoStyles = StyleSheet.create({
	infoToChangeLabel: {
		fontSize: FONT_SIZES.MEDIUM,

		fontWeight: "600",
		paddingBottom: 5,
	},
	infoToChangeInput: {
		fontSize: FONT_SIZES.MEDIUM,

		borderRadius: 5,
		width: "90%",
		padding: 7,
		marginBottom: 20,
	},
});
