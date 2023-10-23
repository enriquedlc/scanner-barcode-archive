import { Dimensions } from "react-native";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";
import { useUserPreferencesStore } from "../../../../store/user-preferences";

export const useChartConfig = () => {
	// here we can instantiate the preffered user theme

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	const width = Dimensions.get("screen").width - 16;
	const height = 220;

	const chartConfigs: AbstractChartConfig[] = [
		{
			propsForLabels: {
				dy: 4,
				skewX: -5,
				fontWeight: "bold",
			},

			backgroundColor: colorScheme.MAIN,
			backgroundGradientFrom: colorScheme.MAIN,
			backgroundGradientTo: colorScheme.GRADIENT_TO,
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

	const monthsToDisplay = 6;
	const monthLabels = Array.from({ length: monthsToDisplay }, (_, i) => {
		const date = new Date();
		date.setMonth(date.getMonth() - i);
		return date.toLocaleString("default", { month: "short" });
	}).reverse();

	return { chartConfigs, graphStyle, width, height, monthLabels };
};
