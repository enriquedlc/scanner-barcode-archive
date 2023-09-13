import { FlatList, View, DimensionValue, Text, StyleSheet } from "react-native";

import { ArticleItem } from "../article-item/article-item";

import { Article } from "../../types/article";
import articlesMock from "../../data/articles.json";

import { articleListStyles } from "./article-list-styles";
import { FONT_SIZES } from "../../constants/font";

const articles: Article[] = articlesMock;

interface ArticleListProps {
  title: string;
  articleListStyleComponentProps: {
    height: DimensionValue;
  };
}

export function ArticleList(props: ArticleListProps) {
  const { articleListStyleComponentProps, title } = props;

  return (
    <View
      style={{
        height: articleListStyleComponentProps.height,
        ...articleListStyles.articleListContainer,
      }}
    >
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={articles}
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
