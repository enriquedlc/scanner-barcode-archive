import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Article } from "../../types/article";

import { TOOLS } from "../../../assets";

import { articleItemStyles } from "./article-item-styles";
import { ArticleInfoModal } from "../article-info-modal/article-info-modal";
import { ArticleItemStats } from "./components/article-item-stats";

interface ArticleItemProps {
  item: Article;
}

const ArticleItemHeader = ({ name, barcode }: Partial<Article>) => (
  <View style={articleItemStyles.articleItemHeader}>
    <Image
      style={articleItemStyles.articleHeaderIcon}
      source={TOOLS.toolBox}
      alt="tool-box"
    />
    <View style={articleItemStyles.articleItemHeaderDescription}>
      <Text style={articleItemStyles.articleItemTitle}>{name}</Text>
      <Text style={articleItemStyles.articleItemBarcode}>
        {barcode}123412341
      </Text>
    </View>
  </View>
);

export const ArticleItem: React.FC<ArticleItemProps> = React.memo(
  ({ item }) => {
    const [showDeleteArticleModal, setShowDeleteArticleModal] = useState(false);

    return (
      <View style={articleItemStyles.articleItemContainer}>
        <View style={[articleItemStyles.articleItem]}>
          <ArticleItemHeader {...item} />
          <ArticleItemStats {...item} />
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
