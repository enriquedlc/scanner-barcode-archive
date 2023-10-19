import { SearchBar } from "@rneui/base/dist/SearchBar/index";
import { useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import { useCategoriesStore } from "../../store/categories";
import { ArticleListItem } from "./article-list-item";

export function ArticleLists() {
	const categories = useCategoriesStore((state) => state.categories);

	const [searchText, setSearchText] = useState("");

	const updateSearchText = (text: string) => setSearchText(text);

	const filteredCategories = categories?.filter((category) =>
		Object.values(category).some(
			(value) =>
				typeof value === "string" && value.toLowerCase().includes(searchText.toLowerCase()),
		),
	);

	return (
		<View style={{ paddingBottom: "15%" }}>
			<SearchBar
				value={searchText}
				onChangeText={updateSearchText}
				placeholder="Buscar artículo..."
				platform={Platform.OS === "ios" ? "ios" : "android"}
				containerStyle={searchStyles.searchbar}
				inputContainerStyle={{ borderRadius: 10, maxHeight: 30 }}
			/>
			<FlatList
				data={filteredCategories}
				renderItem={({ item }) => <ArticleListItem title={item.categoryName} />}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.articleListsContainer}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	articleListsContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
});

const searchStyles = StyleSheet.create({
	searchbar: {
		borderRadius: 10,
		maxHeight: 50,
		shadowColor: "#000",
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 10,
			height: 10,
		},
		elevation: 20,
		width: "87%",
		alignSelf: "center",
		marginTop: "5%",
		marginBottom: "3%",
	},
});
