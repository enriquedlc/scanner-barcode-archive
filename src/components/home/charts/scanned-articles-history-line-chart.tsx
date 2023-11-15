import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ChartData } from "react-native-chart-kit/dist/HelperTypes";

import { useArticlesStore } from "../../../store/articles";
import { ChartTitle } from "./chart-title";
import { useChartConfig } from "./config/useChartConfig";

import { CHART_ICONS } from "../../../../assets";

export function ScannedArticlesHistoryLineChart() {
	const { chartConfigs, graphStyle, height, width } = useChartConfig();

	const { articles } = useArticlesStore((state) => state);

	const findArticlesCreatedPerDay = (): { labels: string[]; values: number[] } => {
		const articlesCreatedPerDay: { [key: string]: number } = {};
		// biome-ignore lint/complexity/noForEach: <explanation>
		articles?.forEach((article) => {
			if (article.createdAt) {
				const date = new Date(article.createdAt);
				const month = date.getMonth();
				const day = date.getDate();
				const dateKey = `${day}/${month}`;
				if (articlesCreatedPerDay[dateKey]) {
					articlesCreatedPerDay[dateKey] += 1;
				} else {
					articlesCreatedPerDay[dateKey] = 1;
				}
			}
		});
		const sortedArticlesCreatedPerDay = Object.entries(articlesCreatedPerDay).sort(
			(a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime(),
		);
		const labels = sortedArticlesCreatedPerDay.map((article) => article[0]).reverse();
		const values = sortedArticlesCreatedPerDay.map((article) => article[1]).reverse();
		return { labels, values };
	};

	// biome-ignore lint/nursery/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		findArticlesCreatedPerDay();
	}, [articles]);

	const data: ChartData = {
		labels: findArticlesCreatedPerDay()?.labels,
		datasets: [
			{
				data: findArticlesCreatedPerDay()?.values,
				color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
				strokeWidth: 2,
			},
		],
	};

	if (articles.length === 0) return null;

	return (
		<>
			<ChartTitle icon={CHART_ICONS.CHART_HISTOGRAM} title="Histórico de artículos" />
			{/* biome-ignore lint/nursery/noGlobalIsNan: <explanation> */}
			{isNaN(findArticlesCreatedPerDay().values[0]) ? (
				<ActivityIndicator size={35} style={{ paddingTop: "10%", alignSelf: "center" }} />
			) : (
				<LineChart
					data={data}
					width={width}
					height={height}
					chartConfig={chartConfigs[0]}
					bezier={true}
					style={graphStyle}
					key="1"
				/>
			)}
		</>
	);
}
