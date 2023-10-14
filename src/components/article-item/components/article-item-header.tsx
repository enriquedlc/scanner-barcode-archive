import { Image, Text, View } from "react-native";

import { Article } from "../../../types/article";

import { TOOLS } from "../../../../assets";

import { BarcodeCategoryTags } from "../../barcode-category-tags/barcode-category-tags";
import { articleItemStyles } from "../article-item-styles";

export const ArticleItemHeader = ({ articleName, barcode, categoryName }: Partial<Article>) => (
	<View style={articleItemStyles.articleItemHeader}>
		<Image style={articleItemStyles.articleHeaderIcon} source={TOOLS.toolBox} alt="tool-box" />
		<View style={articleItemStyles.articleItemHeaderDescription}>
			<Text style={articleItemStyles.articleItemTitle}>{articleName}</Text>
			<BarcodeCategoryTags
				optionalStyles={{ flexDirection: "row", justifyContent: "flex-start", gap: 7 }}
				barcode={barcode as string}
				categoryName={categoryName as string}
			/>
		</View>
	</View>
);
