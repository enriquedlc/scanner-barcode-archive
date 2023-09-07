import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Article } from "../../types/article";

import { articleItemStyles } from "./article-item-styles";
import { ArticleInfoModal } from "../article-info-modal/article-info-modal";

interface ArticleItemProps {
  item: Article;
}
// TODO: refactor -> use memo?

export const ArticleItem: React.FC<ArticleItemProps> = React.memo(
  ({ item }) => {
    const [showDeleteArticleModal, setShowDeleteArticleModal] = useState(false);

    return (
      <View style={articleItemStyles.articleItemContainer}>
        <View style={[articleItemStyles.articleItem]}>
          <Text>{item.name}</Text>
          <Text>{item.barcode}</Text>
          <Text>{item.updatedAt}</Text>
          <View style={[articleItemStyles.iconContainer]}>
            <TouchableOpacity onPress={() => setShowDeleteArticleModal(true)}>
              <FontAwesome5 name="info-circle" size={24} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
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
