import React, { useState } from "react";
import {
  Text,
  ViewToken,
  View,
  Dimensions,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Animated, {
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import { Article } from "../../types/article";

import { articleItemStyles, modalStyles } from "./article-item-styles";

interface ArticleItemProps {
  item: Article;
  viewableArticles: SharedValue<ViewToken[]>;
}
// TODO: refactor -> use memo?

const SCREEN_WIDTH = Dimensions.get("window").width;
const TRANSLATE_X_THRESHOLD = SCREEN_WIDTH * 0.3;

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

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isSwiping, setIsSwiping] = useState(false);

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
      {
        onActive: (event) => {
          translateX.value = event.translationX;
        },
        onEnd: () => {
          if (isSwiping) {
            console.log(translateX.value);
            console.log(TRANSLATE_X_THRESHOLD);
            if (translateX.value < -TRANSLATE_X_THRESHOLD) {
              // If it's swiping and exceeds the threshold, show the delete confirmation modal
              setShowDeleteModal(true);
            } else {
              // If it's swiping but doesn't exceed the threshold, return to the original position
              translateX.value = withSpring(0);
              setIsSwiping(false);
            }
          }
        },
        onCancel: () => {
          if (isSwiping) {
            // If the gesture is canceled, return to the original position
            translateX.value = withSpring(0);
            setIsSwiping(false);
          }
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

    const onDeleteConfirmed = () => {
      // Here you can implement the logic to delete the article
      // After deleting, close the modal and return to the original position
      setShowDeleteModal(false);
      translateX.value = withSpring(0);
      setIsSwiping(false);
    };

    const onCancelDelete = () => {
      // If the user cancels the deletion, close the modal and return to the original position
      setShowDeleteModal(false);
      translateX.value = withSpring(0);
      setIsSwiping(false);
    };

    return (
      <View style={articleItemStyles.articleItemContainer}>
        <Pressable onPress={() => setShowDeleteModal(true)}>
          <Animated.View
            style={[articleItemStyles.iconContainer, reanimatedStyle]}
          >
            <FontAwesome5 name="trash-alt" size={24} color="red" />
          </Animated.View>
        </Pressable>
        <PanGestureHandler
          onGestureEvent={panGesture}
          onHandlerStateChange={(event) => {
            if (
              event.nativeEvent.state === 4 &&
              translateX.value < -TRANSLATE_X_THRESHOLD
            ) {
              // When the gesture is released and exceeds the threshold, mark it as swiping
              setIsSwiping(true);
            }
          }}
        >
          <Animated.View
            style={[
              articleItemStyles.articleItem,
              reanimatedStyle,
              reanimatedGestureStyle,
              isSwiping && { backgroundColor: "red" }, // Change the background color if it's swiping to delete
            ]}
          >
            <Text>{item.name}</Text>
            <Text>{item.barcode}</Text>
            <Text>{item.updatedAt}</Text>
          </Animated.View>
        </PanGestureHandler>
        {/* Delete confirmation modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={showDeleteModal}
        >
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <Text>Do you want to delete this item?</Text>
              <TouchableOpacity
                style={modalStyles.deleteButton}
                onPress={onDeleteConfirmed}
              >
                <Text style={modalStyles.deleteText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={modalStyles.cancelButton}
                onPress={onCancelDelete}
              >
                <Text style={modalStyles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
);
