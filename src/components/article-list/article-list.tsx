import { FlatList, View, DimensionValue } from "react-native";

import { ArticleItem } from "../article-item/article-item";

import { Article } from "../../types/article";

import articlesMock from "../../data/articles.json";

import { articleListStyles } from "./article-list-styles";

const articles: Article[] = articlesMock;

interface ArticleListProps {
  articleListStyleComponentProps: {
    height: DimensionValue;
  };
}

export function ArticleList(props: ArticleListProps) {
  const { articleListStyleComponentProps } = props;

  return (
    <View
      style={{
        height: articleListStyleComponentProps.height,
        ...articleListStyles.articleListContainer,
      }}
    >
      <FlatList
        data={articles}
        renderItem={({ item }) => <ArticleItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
