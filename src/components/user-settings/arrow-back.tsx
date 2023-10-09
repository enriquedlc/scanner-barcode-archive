import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { ARROW_BACK } from "../../../assets/profile-images";

import { BLUE_PALLETE } from "../../constants/colors/colors";
import { useAppNavigation } from "../../hooks/useAppNavigation";

export function ArrowBack() {
	const { navigation } = useAppNavigation();
	return (
		<View style={styles.arrowBackContainer}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Image style={styles.arrowBack} source={ARROW_BACK} />
			</TouchableOpacity>
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
});
