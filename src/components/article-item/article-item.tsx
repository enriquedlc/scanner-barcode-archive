import React, { useState } from "react";
import { Text, ViewToken, View, TouchableOpacity } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";

import { Article } from "../../types/article";

import { articleItemStyles } from "./article-item-styles";
import { ArticleInfoModal } from "../article-info-modal/article-info-modal";

interface ArticleItemProps {
  item: Article;
  viewableArticles: SharedValue<ViewToken[]>;
}
// TODO: refactor -> use memo?

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
    });

    const [showDeleteArticleModal, setShowDeleteArticleModal] = useState(false);

    return (
      <View style={articleItemStyles.articleItemContainer}>
        <Animated.View style={[articleItemStyles.articleItem, reanimatedStyle]}>
          <Text>{item.name}</Text>
          <Text>{item.barcode}</Text>
          <Text>{item.updatedAt}</Text>
          <Animated.View
            style={[articleItemStyles.iconContainer, reanimatedStyle]}
          >
            <TouchableOpacity onPress={() => setShowDeleteArticleModal(true)}>
              <FontAwesome5 name="info-circle" size={24} color="blue" />
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
        {/* Delete confirmation modal */}
        <ArticleInfoModal
          showDeleteArticleModal={showDeleteArticleModal}
          setShowDeleteArticleModal={setShowDeleteArticleModal}
          article={item}
        />
      </View>
    );
  }
);
