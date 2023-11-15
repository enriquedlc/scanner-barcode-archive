import { Dimensions } from "react-native";

import { useUserPreferencesStore } from "../store/user-preferences";

export const getWidth = () => {
	return (Dimensions.get("window").width - 80) / 5;
};

export const getColor = (isFocused: boolean) => {
	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);
	return isFocused ? colorScheme.MAIN : colorScheme.GRAY;
};
