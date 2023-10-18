import { Image, ImageProps, StyleSheet, Text, TouchableOpacity } from "react-native";

import { CATEGORY_ITEM_LIST_ICONS } from "../../constants/category-item-list-icons/category-item-list-icons";
import { DropdownOption } from "./category-dropdown";

interface CategoryItemProps {
	option: DropdownOption;
	handleSelect: (option: DropdownOption) => void;
}

export function CategoryItem(props: CategoryItemProps) {
	const { option, handleSelect } = props;

	return (
		<TouchableOpacity
			key={option.value}
			style={styles.option}
			onPress={() => handleSelect(option)}
		>
			{/* TODO: make the this image bellow a component */}
			<Image
				source={
					CATEGORY_ITEM_LIST_ICONS.find((icon) => icon.categoryName === option.value)
						?.icon as ImageProps["source"]
				}
				style={{ width: 24, height: 24 }}
			/>
			<Text style={styles.optionLabel}>{option.label}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	option: {
		paddingLeft: 5,
		padding: 10,
		display: "flex",
		flexDirection: "row",
		gap: 20,
		borderBlockColor: "gray",
		borderBottomWidth: 0.5,
	},
	optionLabel: {
		fontSize: 16,
	},
});
