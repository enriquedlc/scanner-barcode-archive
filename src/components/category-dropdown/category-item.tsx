import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
