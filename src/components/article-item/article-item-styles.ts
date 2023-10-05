import { StyleSheet } from "react-native";

import { FONT_SIZES } from "../../constants/font";
import { BLUE_PALLETE } from "../../constants/colors/colors";

export const articleItemStyles = StyleSheet.create({
	articleItemContainer: {
		width: "100%",
		alignItems: "center",
		marginVertical: 10,
	},
	articleItem: {
		backgroundColor: "white",
		shadowColor: "black",
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
		minWidth: "95%",
		borderRadius: 10,
		alignSelf: "center",
	},
	iconContainer: {
		alignSelf: "flex-end",
		position: "absolute",
		top: "40%",
		right: 15,
	},
	articleItemHeader: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
		marginLeft: 10,
		gap: 15,
	},
	articleHeaderIcon: {
		width: 50,
		height: 50,
	},
	articleItemHeaderDescription: {
		flex: 1,
		gap: 5,
	},
	articleItemTitle: {
		fontSize: FONT_SIZES.MEDIUM,
		fontWeight: "bold",
	},
	articleItemBarcodeContainer: {
		borderRadius: 5,
		backgroundColor: BLUE_PALLETE.BLUE,
		width: "45%",
		paddingHorizontal: 5,
	},
	articleItemBarcode: {
		fontSize: FONT_SIZES.SMALL,
		color: "white",
		textAlign: "center",
		paddingVertical: 3,
		fontWeight: "bold",
	},
	articleItemDescription: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingTop: 15,
		paddingBottom: 10,
	},
});
