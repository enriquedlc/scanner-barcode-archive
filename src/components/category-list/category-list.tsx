import { FlatList, StyleSheet, View } from "react-native";

import { DropdownOption } from "./category-dropdown/category-dropdown";
import { CategoryItem } from "./category-item";

interface CategoryListProps {
	options: DropdownOption[];
	handleSelect: (value: DropdownOption) => void;
}

export function CategoryList(props: CategoryListProps) {
	const { options, handleSelect } = props;

	return (
		<View style={styles.optionsContainer}>
			<FlatList
				data={options}
				renderItem={({ item }) => (
					<CategoryItem option={item} handleSelect={handleSelect} />
				)}
				keyExtractor={(item) => item.value}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	optionsContainer: {
		position: "absolute",
		top: "100%",
		left: 0,
		right: 0,
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		padding: 10,
		maxHeight: 150,
		overflow: "scroll",
		zIndex: 1,
	},
});
