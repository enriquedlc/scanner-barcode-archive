import { useState } from "react";
import { Platform, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import { useArticleListDetailStore } from "../../store/article-list-detail";
import { useArticlesStore } from "../../store/articles";
import { ArticleLists } from "../artcile-list-by-category/article-lists";
import { ArticleList } from "../article-list/article-list";
import { SearchArticles } from "./search-articles";

import { FONT_SIZES } from "../../constants/font";
import { useUserPreferencesStore } from "../../store/user-preferences";

const FirstRoute = () => <SearchArticles />;

const SecondRoute = ({ jumpTo }: { jumpTo: (route: string) => void }) => (
	<ArticleLists jumpTo={jumpTo} />
);

const ThirdRoute = () => {
	const articles = useArticlesStore((state) => state.articles);
	const articleCategoryDetailListName = useArticleListDetailStore(
		(state) => state.articleCategoryDetailListName,
	);

	return (
		<View style={searchStyles.container}>
			<Text style={searchStyles.listTitle}>
				Detalles de la categoría {articleCategoryDetailListName}
			</Text>
			<ArticleList
				articles={articles?.filter(
					(articles) => articles.categoryName === articleCategoryDetailListName,
				)}
				articleListStyle={{ paddingBottom: "20%" }}
			/>
		</View>
	);
};

const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
	third: ThirdRoute,
});

export function Search() {
	const layout = useWindowDimensions();

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: "first", title: "All articles" },
		{ key: "second", title: "Lists" },
		{ key: "third", title: "Detalles" },
	]);

	return (
		<>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
				renderTabBar={(props) => (
					<TabBar
						{...props}
						style={[
							searchStyles.tabBar,
							{
								backgroundColor: colorScheme.MAIN,
							},
						]}
						labelStyle={[
							searchStyles.tabLabel,
							{
								color: colorScheme.PRIMARY_WHITE,
							},
						]}
						indicatorStyle={searchStyles.tabIndicator}
					/>
				)}
			/>
		</>
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
	tabBar: {
		paddingTop: Platform.OS === "ios" ? "8%" : 0,

		elevation: 0,
		shadowOpacity: 0,
	},
	tabLabel: {
		fontWeight: "bold",
		fontSize: FONT_SIZES.SMALL,
	},
	tabIndicator: {
		backgroundColor: "white",
	},
	listTitle: {
		fontSize: 16,
		fontWeight: "bold",
		paddingTop: "12%",
	},
});
