import { FlatList, StyleSheet, View } from "react-native";
import { useCategoriesStore } from "../../store/categories";
import { ArticleListItem } from "./article-list-item";

export function ArticleLists() {
	const categories = useCategoriesStore((state) => state.categories);

	return (
		<View style={{ paddingBottom: "15%" }}>
			<FlatList
				data={categories}
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
