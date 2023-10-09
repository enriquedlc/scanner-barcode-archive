import { FontAwesome5 } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";

import { ArticleInfoModalStats } from "./article-info-modal-stat";

import { Article } from "../../types/article";

import { articleInfoModalStyles } from "./article-info-modal-styles";
import { ReactNode } from "react";

interface ArticleInfoModalProps {
	showDeleteArticleModal: boolean;
	setShowDeleteArticleModal: (showDeleteArticleModal: boolean) => void;
	article: Article;
	children: ReactNode;
}

export function ArticleInfoModal(props: ArticleInfoModalProps) {
	const { showDeleteArticleModal, setShowDeleteArticleModal, article, children } = props;

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
						<TouchableOpacity
							onPress={() => console.log("edit action!")}
							style={articleInfoModalStyles.editButton}
						>
							<Text style={articleInfoModalStyles.deleteText}>Editar</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => console.log("delete action!")}
							style={articleInfoModalStyles.deleteButton}
						>
							<Text style={articleInfoModalStyles.cancelText}>Borrar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
}
