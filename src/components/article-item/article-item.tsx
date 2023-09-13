import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Article } from "../../types/article";

import { ArticleInfoModal } from "../article-info-modal/article-info-modal";
import { ArticleItemHeader } from "./components/article-item-header";
import { ArticleItemStats } from "./components/article-item-stats";

import { articleItemStyles } from "./article-item-styles";

interface ArticleItemProps {
  article: Article;
}

export const ArticleItem: React.FC<ArticleItemProps> = React.memo(
  ({ article }) => {
    const [showDeleteArticleModal, setShowDeleteArticleModal] = useState(false);

    return (
      <View style={articleItemStyles.articleItemContainer}>
        <View style={[articleItemStyles.articleItem]}>
          <ArticleItemHeader {...article} />
          <ArticleItemStats {...article} />
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
          article={article}
        />
      </View>
    );
  }
);
