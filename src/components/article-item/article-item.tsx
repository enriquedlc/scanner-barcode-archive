import React from "react";
import { Text, ViewToken, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import { Article } from "../../types/article";

import { articleItemStyles } from "./article-item-styles";

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
    }, [viewableArticles]);

    const translateX = useSharedValue(0);

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
      {
        onActive: (event) => {
          translateX.value = event.translationX;
        },
        onEnd: () => {
          translateX.value = withTiming(0);
        },
      }
    );

    const reanimatedGestureStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    }));

    return (
      <View style={articleItemStyles.articleItemContainer}>
        <View style={articleItemStyles.iconContainer}>
          <FontAwesome5 name="trash-alt" size={24} color="red" />
        </View>
        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View
            style={[
              articleItemStyles.articleItem,
              reanimatedStyle,
              reanimatedGestureStyle,
            ]}
          >
            <Text>{item.name}</Text>
            <Text>{item.barcode}</Text>
            <Text>{item.updatedAt}</Text>
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  }
);
