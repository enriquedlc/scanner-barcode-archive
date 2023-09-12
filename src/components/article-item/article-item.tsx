import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Article } from "../../types/article";

import { TOOLS } from "../../../assets";

import { articleItemStyles } from "./article-item-styles";
import { ArticleInfoModal } from "../article-info-modal/article-info-modal";

interface ArticleItemProps {
  item: Article;
}

export const ArticleItem: React.FC<ArticleItemProps> = React.memo(
  ({ item }) => {
    const [showDeleteArticleModal, setShowDeleteArticleModal] = useState(false);

    return (
      <View style={articleItemStyles.articleItemContainer}>
        <View style={[articleItemStyles.articleItem]}>
          <View style={articleItemStyles.articleItemHeader}>
            <Image
              style={articleItemStyles.articleHeaderIcon}
              source={TOOLS.toolBox}
              alt="tool-box"
            />
            <View style={articleItemStyles.articleItemHeaderDescription}>
              <Text>{item.name}</Text>
              <Text>{item.barcode}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 15,
            }}
          >
            <Text>{item.exhibition}</Text>
            <Text>{item.shelf}</Text>
            <Text>{item.warehouse}</Text>
          </View>
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
