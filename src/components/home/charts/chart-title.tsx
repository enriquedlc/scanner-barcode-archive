import { Image, ImageProps, Text, View } from "react-native";

import { chartStyles } from "./styles/chart-styles";

interface ChartTitleProps {
	title: string;
	icon: string;
}

export function ChartTitle(props: ChartTitleProps) {
	const { title, icon } = props;
	return (
		<View style={chartStyles.chartLabelContainer}>
			<Text style={chartStyles.chartLabel}>{title}</Text>
			<Image style={chartStyles.chartLabelIcon} source={icon as ImageProps["source"]} />
		</View>
	);
}
