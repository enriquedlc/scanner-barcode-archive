import { View, Text } from "react-native";

import { Article } from "../../types/article";

import { articleItemStyles } from "./article-item-styles";

interface ArticleItemProps {
  item: Article;
}

export const ArticleItem = (props: ArticleItemProps) => {
  const { item } = props;

  return (
    <View style={articleItemStyles.articleItem}>
      <Text>{item.name}</Text>
      <Text>{item.barcode}</Text>
      <Text>{item.updatedAt}</Text>
    </View>
  );
};
