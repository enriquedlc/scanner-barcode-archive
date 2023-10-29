import { Platform, StyleSheet } from "react-native";

import { FONT_SIZES } from "../../constants/font";

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

		backgroundColor: "#fff",
		borderRadius: 100,
		width: 95,
		height: 95,
		marginTop: 15,
		marginLeft: 20,
		alignItems: "center",
		justifyContent: "center",
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
	},
	email: {
		fontSize: 15,
		paddingTop: 3,
		paddingLeft: 1,
		flexWrap: "wrap",
		maxWidth: 200,
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
