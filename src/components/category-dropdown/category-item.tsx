import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { DropdownOption } from "./category-dropdown";
import { CategoryIcon } from "./category-icon";

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
			<CategoryIcon imageStyles={{ width: 28, height: 28 }} categoryName={option.value} />
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
		textAlignVertical: "center",
	},
});
