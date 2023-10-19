import { Image, ImageProps } from "react-native";

import { CATEGORY_ITEM_LIST_ICONS } from "../../constants/category-item-list-icons/category-item-list-icons";
import { Category } from "../../services/category";

interface CategoryIconProps {
	categoryName: Category["categoryName"];
}

export function CategoryIcon(props: CategoryIconProps) {
	const { categoryName } = props;

	return (
		<Image
			source={
				CATEGORY_ITEM_LIST_ICONS.find((icon) => icon.categoryName === categoryName)
					?.icon as ImageProps["source"]
			}
			style={{ width: 24, height: 24 }}
		/>
	);
}
