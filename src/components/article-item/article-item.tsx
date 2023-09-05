import React from "react";
import { Text, ViewToken } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { Article } from "../../types/article";

import { articleItemStyles } from "./article-item-styles";

interface ArticleItemProps {
  item: Article;
  viewableArticles: SharedValue<ViewToken[]>;
}

export const ArticleItem: React.FC<ArticleItemProps> = React.memo(
  ({ item, viewableArticles }) => {
    const reanimatedStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableArticles.value
          .filter((item) => item.isViewable)
          .find((viewableItem) => viewableItem.item.id === item.id)
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.3),
          },
        ],
      };
    }, [viewableArticles]);

    return (
      <Animated.View style={[articleItemStyles.articleItem, reanimatedStyle]}>
        <Text>{item.name}</Text>
        <Text>{item.barcode}</Text>
        <Text>{item.updatedAt}</Text>
      </Animated.View>
    );
  }
);
