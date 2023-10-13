import { StyleSheet } from "react-native";

import { BLUE_PALLETE } from "../../../../../constants/colors/colors";
import { FONT_SIZES } from "../../../../../constants/font";

export const changeUserInfoStyles = StyleSheet.create({
	infoToChangeLabel: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.PRIMARY_BLACK,
		fontWeight: "600",
		paddingBottom: 5,
	},
	infoToChangeInput: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.SECONDARY_BLACK,
		borderRadius: 5,
		width: "90%",
		padding: 7,
		marginBottom: 20,
		backgroundColor: BLUE_PALLETE.SECONDARY_WHITE,
	},
});
