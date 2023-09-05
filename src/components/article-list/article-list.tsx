import { FlatList, View, DimensionValue, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";

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

  const viewableArticles = useSharedValue<ViewToken[]>([]);

  console.log(articles);

  return (
    <View
      style={{
        height: articleListStyleComponentProps.height,
        ...articleListStyles.articleListContainer,
      }}
    >
      <FlatList
        data={articles}
        onViewableItemsChanged={({ viewableItems }) => {
          viewableArticles.value = viewableItems;
        }}
        renderItem={({ item }) => (
          <ArticleItem item={item} viewableArticles={viewableArticles} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
