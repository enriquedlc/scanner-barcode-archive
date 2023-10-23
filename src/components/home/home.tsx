import { useEffect } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { useArticlesStore } from "../../store/articles";
import { useUserAuthStore } from "../../store/user-auth";
import { ArticleItem } from "../article-item/article-item";
import { ScannedArticlesHistoryLineChart } from "./charts/scanned-articles-history-line-chart";

import { BARCODE_SCANNER } from "../../../assets";
import { FONT_SIZES } from "../../constants/font";
import { CategoriesUsageBarChart } from "./charts/categories-usage-bar-chart";

export function Home() {
	const { fetchArticles, articles } = useArticlesStore((state) => state);
	const user = useUserAuthStore((state) => state.user);

	// TODO: implement loading state
	// biome-ignore lint/nursery/useExhaustiveDependencies: <>
	useEffect(() => {
		if (user?.id) fetchArticles(user.id);
	}, [user]);

	return (
		<SafeAreaView>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={homeStyles.headerContainer}>
					<Image style={homeStyles.headerBarcodeImage} source={BARCODE_SCANNER} />
					<Text style={homeStyles.headerText}>Article Scanner</Text>
				</View>
				<ScannedArticlesHistoryLineChart />
				<CategoriesUsageBarChart />
				<Text style={homeStyles.articleListTitle}>Últimos artículos escaneados</Text>
				<View style={homeStyles.container}>
					{articles
						?.map((article) => (
							<ArticleItem
								article={article}
								key={article.id}
								articleContainerStyle={{
									width: "97%",
									alignItems: "center",
									marginVertical: 10,
								}}
							/>
						))
						.splice(0, 5)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const homeStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: "15%",
	},
	articleListTitle: {
		fontSize: FONT_SIZES.LARGE,
		fontWeight: "bold",
		paddingTop: "10%",
		marginLeft: "5%",
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: "7%",
		marginLeft: "5%",
	},
	headerBarcodeImage: {
		width: 30,
		height: 30,
		marginRight: 10,
	},
	headerText: {
		fontSize: FONT_SIZES.EXTRA_LARGE,
		fontWeight: "bold",
	},
});
