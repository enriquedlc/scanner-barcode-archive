import { Platform, StyleSheet } from "react-native";

import { BLUE_PALLETE } from "../../constants/colors/colors";
import { FONT_SIZES } from "../../constants/font";

// TODO: refactor colors to constants

export const profileStyles = StyleSheet.create({
	profileContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "column",
	},
	profileCard: {
		flexDirection: "row",
		width: "90%",
		height: "17%",
		backgroundColor: "#fff",
		borderRadius: 10,
		marginTop: Platform.OS === "ios" ? 80 : 40,
		shadowColor: BLUE_PALLETE.BLUE,
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.5,
		shadowRadius: 3.84,
		elevation: 5,
	},
	photo: {
		borderWidth: 2,
		borderColor: BLUE_PALLETE.BLUE,
		backgroundColor: "#fff",
		borderRadius: 100,
		width: 95,
		height: 95,
		marginTop: 15,
		marginLeft: 20,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: BLUE_PALLETE.BLUE,
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.5,
		shadowRadius: 3.84,
		elevation: 5,
	},
	editPhotoButton: {
		position: "absolute",
		borderRadius: 100,
		borderWidth: 1,
		backgroundColor: BLUE_PALLETE.BLUE,
		alignItems: "center",
		justifyContent: "center",
		width: 30,
		height: 30,
		left: 75,
		top: 55,
	},
	infoLabelContainer: {
		flexDirection: "column",
		marginLeft: 30,
		marginTop: 20,
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
		color: BLUE_PALLETE.PRIMARY_BLACK,
	},
	email: {
		fontSize: 15,
		color: BLUE_PALLETE.SECONDARY_BLACK,
		paddingTop: 3,
		paddingLeft: 1,
		maxWidth: "85%",
	},
	scannedArticlesLabel: {
		fontSize: FONT_SIZES.EXTRA_LARGE,
		fontWeight: "bold",
		paddingTop: 20,
		paddingBottom: 10,
	},
	profileLabelContainer: {
		width: "80%",
		paddingTop: 20,
		gap: 40,
	},
	profileDefaultLabel: {
		paddingBottom: 10,
		fontSize: FONT_SIZES.MEDIUM,
		fontWeight: "bold",
		textAlign: "left",
	},
	profileDefaultLabelValue: {
		fontSize: FONT_SIZES.MEDIUM,
		textAlign: "left",
		color: BLUE_PALLETE.SECONDARY_BLACK,
	},
	profileIcon: {
		width: 20,
		height: 20,
		objectFit: "contain",
		marginLeft: 10,
		...Platform.select({
			ios: {
				bottom: 2,
			},
		}),
	},
});
