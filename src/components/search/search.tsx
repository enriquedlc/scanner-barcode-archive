import { useState } from "react";
import { Platform, StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { BLUE_PALLETE } from "../../constants/colors/colors";
import { ArticleLists } from "../artcile-list-by-category/article-lists";
import { SearchArticles } from "./search-articles";

const FirstRoute = () => <SearchArticles />;

const SecondRoute = () => <ArticleLists/>

const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
});

export function Search() {
	const layout = useWindowDimensions();

	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: "first", title: "All articles" },
		{ key: "second", title: "Lists" },
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
});
