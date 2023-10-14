import { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

import { SearchBar } from "@rneui/base/dist/SearchBar/index";
import { ArticleList } from "../article-list/article-list";

import { useArticlesStore } from "../../store/articles";

import { articleListStylesComponentProps } from "../home/home-styles";

export function Search() {
	const articles = useArticlesStore((state) => state.articles);

	const [searchText, setSearchText] = useState("");

	const updateSearchText = (text: string) => setSearchText(text);

	const filteredArticles = articles.filter((article) =>
		Object.values(article).some(
			(value) =>
				typeof value === "string" && value.toLowerCase().includes(searchText.toLowerCase()),
		),
	);

	return (
		<SafeAreaView style={searchStyles.container}>
			<View style={{ maxWidth: "87%", minWidth: "87%", paddingTop: "20%" }}>
				<SearchBar
					value={searchText}
					onChangeText={updateSearchText}
					placeholder="Buscar artículo..."
					platform={Platform.OS === "ios" ? "ios" : "android"}
					containerStyle={searchStyles.searchbar}
					inputContainerStyle={{ borderRadius: 10, maxHeight: 30 }}
				/>
			</View>
			<ArticleList
				articles={filteredArticles}
				articleListStyleComponentProps={articleListStylesComponentProps}
			/>
		</SafeAreaView>
	);
}

const searchStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
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
	},
});
