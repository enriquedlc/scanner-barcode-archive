import { Image, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

import { useChartConfig } from "./config/useChartConfig";

import { CHART_ICONS } from "../../../../assets";
import { chartStyles } from "./styles/chart-styles";

import { MOCK_CHART_DATA } from "./data/mock-chart-data";

export function CategoriesUsageBarChart() {
	const { chartConfigs, graphStyle, height, width } = useChartConfig();

	return (
		<>
			<View style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
				<View style={chartStyles.chartLabelContainer}>
					<Text style={chartStyles.chartLabel}>Artículos por categoría</Text>
					<Image style={chartStyles.chartLabelIcon} source={CHART_ICONS.CHART_BAR} />
				</View>
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
