import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { useUserPreferencesStore } from "../../store/user-preferences";
import { articleItemStyles } from "../article-item/article-item-styles";

interface BarcodeProps {
	barcode: string;
	categoryName: string;
	optionalStyles?: StyleProp<ViewStyle>;
}

export function BarcodeCategoryTags({ barcode, categoryName, optionalStyles }: BarcodeProps) {
	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	const articleItemBarcodeContainer = {
		borderRadius: 5,
		backgroundColor: colorScheme.MAIN,
		paddingHorizontal: 5,
	};

	return (
		<View style={optionalStyles ? optionalStyles : mainViewStyles.mainView}>
			<View style={[articleItemBarcodeContainer, styles.barcodeContainer]}>
				<Text style={articleItemStyles.articleItemBarcode}>{barcode}</Text>
			</View>
			<View style={[articleItemBarcodeContainer, styles.barcodeContainer]}>
				<Text style={articleItemStyles.articleItemBarcode}>{categoryName}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	barcodeContainer: {
		alignSelf: "center",
		marginBottom: "4%",
		paddingHorizontal: "4%",
	},
});

const mainViewStyles = StyleSheet.create({
	mainView: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 7,
	},
});
