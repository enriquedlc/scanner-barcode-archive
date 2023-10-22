import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";

import { ArticleInfoModal } from "../article-info-modal/article-info-modal";
import { ArticleItemHeader } from "./components/article-item-header";
import { ArticleItemStats } from "./components/article-item-stats";

import { Article } from "../../types/article";

import { ArticleInfoModalStats } from "../article-info-modal/article-info-modal-stat";
import { articleItemStyles } from "./article-item-styles";

interface ArticleItemProps {
	article: Article;
	articleContainerStyle?: ViewStyle;
}

export const ArticleItem: React.FC<ArticleItemProps> = React.memo(
	({ article, articleContainerStyle }) => {
		const [showDeleteArticleModal, setShowDeleteArticleModal] = useState(false);

		return (
			<View style={articleContainerStyle || articleItemStyles.articleItemContainer}>
				<View style={[articleItemStyles.articleItem]}>
					<ArticleItemHeader {...article} />
					<ArticleItemStats {...article} />
					<View style={[articleItemStyles.iconContainer]}>
						<TouchableOpacity onPress={() => setShowDeleteArticleModal(true)}>
							<FontAwesome5 name="info-circle" size={24} color="blue" />
						</TouchableOpacity>
					</View>
				</View>
				<ArticleInfoModal
					showDeleteArticleModal={showDeleteArticleModal}
					setShowArticleInfoModal={setShowDeleteArticleModal}
					article={article}
				>
					<ArticleInfoModalStats article={article} />
				</ArticleInfoModal>
			</View>
		);
	},
);
