import { FontAwesome5 } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";

import { Article } from "../../types/article";

import { ArticleInfoModalStats } from "./article-info-modal-stat";

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
        <TouchableOpacity
          onPress={() => setShowDeleteArticleModal(false)}
          style={articleInfoModalStyles.closeModalButton}
        >
          {/* TODO: prettify this component */}
          <FontAwesome5 name="times" size={18} color="white" />
        </TouchableOpacity>
        <View style={articleInfoModalStyles.modalView}>
          <View style={{ gap: 5, marginBottom: 15 }}>
            <Text style={articleInfoModalStyles.title}>
              Información del artículo
            </Text>
            <ArticleInfoModalStats article={article} />
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
