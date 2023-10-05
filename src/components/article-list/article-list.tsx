import { FlatList, View, DimensionValue, Text, StyleSheet } from "react-native";

import { ArticleItem } from "../article-item/article-item";

import { Article } from "../../types/article";

import { articleListStyles } from "./article-list-styles";
import { FONT_SIZES } from "../../constants/font";

interface ArticleListProps {
	title?: string;
	articleListStyleComponentProps: {
		height: DimensionValue;
	};
	data: Article[];
}

export function ArticleList(props: ArticleListProps) {
	const { articleListStyleComponentProps, title, data } = props;

	return (
		<View
			style={{
				height: articleListStyleComponentProps.height,
				...articleListStyles.articleListContainer,
			}}
		>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				data={data}
				renderItem={({ item }) => <ArticleItem article={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: FONT_SIZES.EXTRA_LARGE,
		fontWeight: "bold",
	},
});
