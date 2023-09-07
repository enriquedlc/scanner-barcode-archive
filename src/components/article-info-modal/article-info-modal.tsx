import { Modal, Text, TouchableOpacity, View } from "react-native";

import { Article } from "../../types/article";

import { articleInfoModalStyles } from "./article-info-modal-styles";

interface ArticleInfoModalProps {
  showDeleteArticleModal: boolean;
  setShowDeleteArticleModal: (showDeleteArticleModal: boolean) => void;
  article: Article;
}

export function ArticleInfoModal(props: ArticleInfoModalProps) {
  const { showDeleteArticleModal, setShowDeleteArticleModal, article } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showDeleteArticleModal}
    >
      <View style={articleInfoModalStyles.centeredView}>
        <View style={articleInfoModalStyles.modalView}>
          <View style={{ gap: 5, marginBottom: 15 }}>
            <Text style={articleInfoModalStyles.title}>
              Información del artículo
            </Text>
            <Text style={articleInfoModalStyles.label}>
              Código de barras: {article.barcode}
            </Text>
            <Text style={articleInfoModalStyles.label}>
              Nombre: {article.name}
            </Text>
            <Text style={articleInfoModalStyles.label}>
              Fecha:{" "}
              {article.createdAt.split("T")[0].split("-").reverse().join("/")}
            </Text>
            <Text style={articleInfoModalStyles.label}>
              Exhibición: {article.exhibition}
            </Text>
            <Text style={articleInfoModalStyles.label}>
              Almacén: {article.warehouse}
            </Text>
            <Text style={articleInfoModalStyles.label}>
              Estantería: {article.shelf}
            </Text>
          </View>
          <View style={articleInfoModalStyles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setShowDeleteArticleModal(true)}
              style={articleInfoModalStyles.editButton}
            >
              <Text style={articleInfoModalStyles.deleteText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowDeleteArticleModal(false)}
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
