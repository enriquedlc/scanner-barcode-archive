import { Dimensions } from "react-native";

import { BLUE_PALLETE } from "./colors";

export const getWidth = () => {
    return (Dimensions.get("window").width - 80) / 5;
};

export const getColor = (isFocused: boolean) => {
    return isFocused ? BLUE_PALLETE.BLUE : BLUE_PALLETE.GRAY;
};