import { DimensionValue, Platform } from "react-native";

interface ArticleListStylesComponentProps {
	height: DimensionValue;
}

export const articleListStylesComponentProps: ArticleListStylesComponentProps = {
	height: Platform.OS === "ios" ? "92%" : "90%",
};

export const articleListStylesComponentSearchProps: ArticleListStylesComponentProps = {
	height: "100%",
};
