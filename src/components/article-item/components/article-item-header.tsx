import { Image, ImageProps, Text, View } from "react-native";

import { Article } from "../../../types/article";

import { CATEGORY_ITEM_LIST_ICONS } from "../../../constants/category-item-list-icons/category-item-list-icons";
import { BarcodeCategoryTags } from "../../barcode-category-tags/barcode-category-tags";
import { articleItemStyles } from "../article-item-styles";

export const ArticleItemHeader = ({ articleName, barcode, categoryName }: Partial<Article>) => (
	<View style={articleItemStyles.articleItemHeader}>
		<Image
			style={articleItemStyles.articleHeaderIcon}
			source={
				CATEGORY_ITEM_LIST_ICONS.find((icon) => icon.categoryName === categoryName)
					?.icon as ImageProps
			}
			alt="tool-box"
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
