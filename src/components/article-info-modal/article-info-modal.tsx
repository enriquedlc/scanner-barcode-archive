import { FontAwesome5 } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

import { Article } from "../../types/article";
import { ArticleForm } from "../article-form/article-form";
import ActionButton from "./action-button";

import { deleteArticle } from "../../services/articles";
import { useArticlesStore } from "../../store/articles";
import { useScanner } from "../barcode-scanner/useScanner";
import { articleInfoModalStyles } from "./article-info-modal-styles";

interface ArticleInfoModalProps {
	showDeleteArticleModal: boolean;
	setShowDeleteArticleModal: (showDeleteArticleModal: boolean) => void;
	article: Article;
	children: ReactNode;
}

export function ArticleInfoModal(props: ArticleInfoModalProps) {
	const { showDeleteArticleModal, setShowDeleteArticleModal, children, article } = props;
	const { setScannedBarcode, setShowArticleForm, showArticleForm } = useScanner();
	const { setArticles, articles } = useArticlesStore((state) => state);

	const handleDeleteArticle = async () => {
		const response = await deleteArticle(article.id);
		if (response?.deleted) {
			setShowDeleteArticleModal(false);
			setArticles(articles.filter((art) => art.id !== article.id));
		}
	};

	return (
		<Modal animationType="fade" transparent={true} visible={showDeleteArticleModal}>
			<View style={articleInfoModalStyles.centeredView}>
				<TouchableOpacity
					onPress={() => setShowDeleteArticleModal(false)}
					style={articleInfoModalStyles.closeModalButton}
				>
					{/* TODO: prettify this component */}
					<FontAwesome5 name="times" size={18} color="white" />
				</TouchableOpacity>
				<View style={articleInfoModalStyles.modalView}>
					<View style={{ gap: 5, marginBottom: 15 }}>
						<Text style={articleInfoModalStyles.title}>Información del artículo</Text>
						{children}
					</View>
					<View style={articleInfoModalStyles.buttonsContainer}>
						<ActionButton
							text="Editar"
							onPress={() => setShowArticleForm(true)}
							buttonStyle={articleInfoModalStyles.editButton}
							textStyle={articleInfoModalStyles.deleteText}
						/>
						<ActionButton
							text="Borrar"
							onPress={handleDeleteArticle}
							buttonStyle={articleInfoModalStyles.deleteButton}
							textStyle={articleInfoModalStyles.cancelText}
						/>
						<ArticleForm
							visible={showArticleForm}
							setShowArticleForm={setShowArticleForm}
							scannedBarcode={article.barcode}
							setScannedBarcode={setScannedBarcode}
							article={article}
							articleButtonActionText="Editar"
							articleFormTitle="Editar artículo"
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}
