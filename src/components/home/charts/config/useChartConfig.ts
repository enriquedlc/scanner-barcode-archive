import { Dimensions } from "react-native";

export const useChartConfig = () => {
	// here we can instantiate the preffered user theme

	const width = Dimensions.get("screen").width - 16;
	const height = 230;

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

	const graphStyle = {
		...chartConfigs[0].style,
		marginHorizontal: 10,
	};

	return { chartConfigs, graphStyle, width, height };
};
