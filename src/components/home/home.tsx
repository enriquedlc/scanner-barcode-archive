import { useEffect } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";

import { useArticlesStore } from "../../store/articles";
import { useUserAuthStore } from "../../store/user-auth";
import { ArticleItem } from "../article-item/article-item";

import { BARCODE_SCANNER, CHART_ICONS } from "../../../assets";
import { FONT_SIZES } from "../../constants/font";

//////////////////////////////////////////////
const chartConfigs = [
	{
		backgroundColor: "#022173",
		backgroundGradientFrom: "#022173",
		backgroundGradientTo: "#1b3fa0",
		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		style: {
			borderRadius: 16,
		},
	},
];

const Charts = () => {
	const data = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				data: [50, 20, 2, 86, 71, 100],
				color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
			},
			{
				data: [20, 10, 4, 56, 87, 90],
			},
			{
				data: [30, 90, 67, 54, 10, 2],
			},
		],
	};
	const width = Dimensions.get("screen").width - 16;
	const height = 230;
	return chartConfigs.map((chartConfig) => {
		const graphStyle = {
			...chartConfig.style,
			marginHorizontal: 10,
		};

		return (
			<View style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
				<View style={chartStyles.chartLabelContainer}>
					<Text style={chartStyles.chartLabel}>Histórico de artículos</Text>
					<Image
						style={chartStyles.chartLabelIcon}
						source={CHART_ICONS.CHART_HISTOGRAM}
					/>
				</View>
				<LineChart
					data={data}
					width={width}
					height={height}
					chartConfig={chartConfig}
					bezier={true}
					style={graphStyle}
					key="1"
				/>
				<View style={chartStyles.chartLabelContainer}>
					<Text style={chartStyles.chartLabel}>Artículos por categoría</Text>
					<Image style={chartStyles.chartLabelIcon} source={CHART_ICONS.CHART_BAR} />
				</View>
				<BarChart
					width={width}
					height={height}
					data={data}
					chartConfig={chartConfig}
					style={graphStyle}
					key="2"
				/>
			</View>
		);
	});
};

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
				<Charts />
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
