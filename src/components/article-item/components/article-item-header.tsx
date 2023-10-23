import { Text, View } from "react-native";

import { Article } from "../../../types/article";

import { BarcodeCategoryTags } from "../../barcode-category-tags/barcode-category-tags";
import { CategoryIcon } from "../../category-dropdown/category-icon";
import { articleItemStyles } from "../article-item-styles";
import { Category } from "../../../services/category";

export const ArticleItemHeader = ({ articleName, barcode, categoryName }: Partial<Article>) => (
	<View style={articleItemStyles.articleItemHeader}>
		<CategoryIcon
			categoryName={categoryName as Category["categoryName"]}
			imageStyles={articleItemStyles.articleHeaderIcon}
		/>
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
