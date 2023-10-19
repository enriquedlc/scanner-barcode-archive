import { DimensionValue, FlatList, StyleSheet, Text, View } from "react-native";

import { ArticleItem } from "../article-item/article-item";

import { Article } from "../../types/article";

import { FONT_SIZES } from "../../constants/font";
import { articleListStyles } from "./article-list-styles";

interface ArticleListProps {
	title?: string;
	articleListStyleComponentProps?: {
		height: DimensionValue;
	};
	articles: Article[];
}

export function ArticleList(props: ArticleListProps) {
	const { articleListStyleComponentProps, title, articles } = props;

	return (
		<View
			style={{
				height: articleListStyleComponentProps?.height,
				...articleListStyles.articleListContainer,
			}}
		>
			<Text style={styles.title}>{title}</Text>
			{articles === undefined || articles.length === 0 ? (
				<Text>Esto está muy vacío, agrega tu primer artículo!</Text>
			) : (
				<FlatList
					data={articles}
					renderItem={({ item }) => <ArticleItem article={item} />}
					keyExtractor={(item) => item.id}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: FONT_SIZES.EXTRA_LARGE,
		fontWeight: "bold",
	},
});
