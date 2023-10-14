import { Image, StyleSheet, Text, View } from "react-native";

import { Article } from "../../../types/article";

import { TOOLS } from "../../../../assets";

import { articleItemStyles } from "../article-item-styles";

export const ArticleItemHeader = ({ articleName, barcode, categoryName }: Partial<Article>) => (
	<View style={articleItemStyles.articleItemHeader}>
		<Image style={articleItemStyles.articleHeaderIcon} source={TOOLS.toolBox} alt="tool-box" />
		<View style={articleItemStyles.articleItemHeaderDescription}>
			<Text style={articleItemStyles.articleItemTitle}>{articleName}</Text>
			<View style={styles.articleCharacteristicsContainer}>
				<View style={articleItemStyles.articleItemBarcodeContainer}>
					<Text style={articleItemStyles.articleItemBarcode}>{barcode}</Text>
				</View>
				<View style={articleItemStyles.articleItemBarcodeContainer}>
					<Text style={articleItemStyles.articleItemBarcode}>{categoryName}</Text>
				</View>
			</View>
		</View>
	</View>
);

const styles = StyleSheet.create({
	articleCharacteristicsContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		maxWidth: "70%",
		gap: 7,
	},
});
