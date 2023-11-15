import { FlatList, StyleSheet, View } from "react-native";

import { DropdownOption } from "./category-dropdown";
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
		position: "relative",
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		padding: 10,
		height: 200,
	},
});
