import { StyleSheet } from "react-native";

import { FONT_SIZES } from "../../../../constants/font";

export const chartStyles = StyleSheet.create({
	chartLabelContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 20,
		marginLeft: "5%",
		gap: 10,
	},
	chartLabel: {
		marginVertical: 10,
		// textAlign: "center",
		fontSize: FONT_SIZES.LARGE,
		color: "black",
		alignSelf: "center",
	},
	chartLabelIcon: {
		width: 24,
		height: 24,
	},
});
