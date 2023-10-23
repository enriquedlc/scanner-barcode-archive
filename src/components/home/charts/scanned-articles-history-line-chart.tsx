import { Image, Text, View } from "react-native";

import { MOCK_CHART_DATA } from "./data/mock-chart-data";

import { LineChart } from "react-native-chart-kit";
import { CHART_ICONS } from "../../../../assets";
import { useChartConfig } from "./config/useChartConfig";
import { chartStyles } from "./styles/chart-styles";

export function ScannedArticlesHistoryLineChart() {
	const { chartConfigs, graphStyle, height, width } = useChartConfig();

	return (
		<>
			<View style={chartStyles.chartLabelContainer}>
				<Text style={chartStyles.chartLabel}>Histórico de artículos</Text>
				<Image style={chartStyles.chartLabelIcon} source={CHART_ICONS.CHART_HISTOGRAM} />
			</View>
			<LineChart
				data={MOCK_CHART_DATA}
				width={width}
				height={height}
				chartConfig={chartConfigs[0]}
				bezier={true}
				style={graphStyle}
				key="1"
			/>
		</>
	);
}
