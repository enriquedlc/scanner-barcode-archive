import { View } from "react-native";
import { BarChart } from "react-native-chart-kit";

import { ChartTitle } from "./chart-title";
import { useChartConfig } from "./config/useChartConfig";

import { CHART_ICONS } from "../../../../assets";

import { MOCK_CHART_DATA } from "./data/mock-chart-data";

export function CategoriesUsageBarChart() {
	const { chartConfigs, graphStyle, height, width } = useChartConfig();

	return (
		<>
			<View style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
				<ChartTitle title="Uso de categorías" icon={CHART_ICONS.CHART_BAR} />
				<BarChart
					data={MOCK_CHART_DATA}
					width={width}
					height={height}
					chartConfig={chartConfigs[0]}
					style={graphStyle}
					key="2"
				/>
			</View>
		</>
	);
}
