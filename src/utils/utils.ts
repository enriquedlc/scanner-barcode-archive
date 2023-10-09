import { Dimensions } from "react-native";

import { BLUE_PALLETE } from "../constants/colors/colors";

export const getWidth = () => {
	return (Dimensions.get("window").width - 80) / 5;
};

export const getColor = (isFocused: boolean) => {
	return isFocused ? BLUE_PALLETE.BLUE : BLUE_PALLETE.GRAY;
};
