import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { DropdownOption } from "./category-dropdown";

import { CATEGORY_ITEM_LIST_ICONS } from "../../constants/category-item-list-icons/category-item-list-icons";

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
			<Image
				source={CATEGORY_ITEM_LIST_ICONS.find((icon) => icon.icon === option.label)}
				style={{ width: 24, height: 24 }}
			/>
			<Text style={styles.optionLabel}>{option.label}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	option: {
		padding: 10,
	},
	optionLabel: {
		fontSize: 16,
	},
});
