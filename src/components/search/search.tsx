import { useState } from "react";
import { Platform, StyleSheet, View, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import { useArticleListDetailStore } from "../../store/article-list-detail";
import { useArticlesStore } from "../../store/articles";
import { ArticleLists } from "../artcile-list-by-category/article-lists";
import { ArticleList } from "../article-list/article-list";
import { SearchArticles } from "./search-articles";

import { BLUE_PALLETE } from "../../constants/colors/colors";

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
			<ArticleList
				articles={articles.filter(
					(articles) => articles.categoryName === articleCategoryDetailListName,
				)}
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
						style={searchStyles.tabBar}
						labelStyle={searchStyles.tabLabel}
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
		backgroundColor: BLUE_PALLETE.BLUE,
		elevation: 0,
		shadowOpacity: 0,
	},
	tabLabel: {
		color: BLUE_PALLETE.PRIMARY_WHITE,
		fontWeight: "bold",
	},
	tabIndicator: {
		backgroundColor: "white",
	},
	button: {
		color: BLUE_PALLETE.BLUE,
		fontWeight: "bold",
		fontSize: 16,
	},
});
