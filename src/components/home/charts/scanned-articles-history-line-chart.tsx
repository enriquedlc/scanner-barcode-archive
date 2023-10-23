import { LineChart } from "react-native-chart-kit";

import { useChartConfig } from "./config/useChartConfig";

import { CHART_ICONS } from "../../../../assets";

import { ChartTitle } from "./chart-title";
import { MOCK_CHART_DATA } from "./data/mock-chart-data";

export function ScannedArticlesHistoryLineChart() {
	const { chartConfigs, graphStyle, height, width } = useChartConfig();

	return (
		<>
			<ChartTitle icon={CHART_ICONS.CHART_HISTOGRAM} title="Histórico de artículos" />
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
