import { FlatList, View } from "react-native";

import { ArticleItem } from "../article-item/article-item";

import { Article } from "../../types/article";

import articlesMock from "../../data/articles.json";

const articles: Article[] = articlesMock;

export function ArticleList() {
  console.log(articles);

  return (
    <View
      style={{
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
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
