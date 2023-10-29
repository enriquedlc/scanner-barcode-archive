import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { ChartData } from "react-native-chart-kit/dist/HelperTypes";

import { useArticlesStore } from "../../../store/articles";
import { ChartTitle } from "./chart-title";
import { useChartConfig } from "./config/useChartConfig";

import { CHART_ICONS } from "../../../../assets";

export function CategoriesUsageBarChart() {
	const { chartConfigs, graphStyle, height, width } = useChartConfig();

	const { articles } = useArticlesStore((state) => state);

	const findMostUsedCategories = (): { labels: string[]; values: number[] } => {
		const categories: { [key: string]: number } = {};
		// biome-ignore lint/complexity/noForEach: <explanation>
		articles?.forEach((article) => {
			if (article.categoryName) {
				if (categories[article.categoryName]) {
					categories[article.categoryName] += 1;
				} else {
					categories[article.categoryName] = 1;
				}
			}
		});
		const sortedCategories = Object.entries(categories).sort((a, b) => b[1] - a[1]);
		const mostUsedCategories = sortedCategories.slice(0, 4);
		const mostUsedCategoriesLabels = mostUsedCategories.map((category) => category[0]);
		const mostUsedCategoriesValues = mostUsedCategories.map((category) => category[1]);
		return { labels: mostUsedCategoriesLabels, values: mostUsedCategoriesValues };
	};

	// biome-ignore lint/nursery/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		findMostUsedCategories();
	}, [articles]);

	const data: ChartData = {
		labels: findMostUsedCategories()?.labels,
		datasets: [
			{
				data: findMostUsedCategories()?.values,
				color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
				strokeWidth: 2, // optional
			},
		],
	};

	if (articles.length === 0) return null;

	return (
		<>
			<ChartTitle title="Uso de categorías" icon={CHART_ICONS.CHART_BAR} />
			{/* biome-ignore lint/nursery/noGlobalIsNan: <explanation> */}
			{isNaN(findMostUsedCategories().values[0]) ? (
				<ActivityIndicator size={35} style={{ paddingTop: "10%", alignSelf: "center" }} />
			) : (
				<BarChart
					data={data}
					width={width}
					height={height}
					chartConfig={chartConfigs[0]}
					style={graphStyle}
					key="2"
					yAxisLabel=""
					yAxisSuffix=""
					yAxisInterval={1}
				/>
			)}
		</>
	);
}
