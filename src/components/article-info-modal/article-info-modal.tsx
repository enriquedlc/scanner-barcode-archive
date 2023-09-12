import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Dimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Article } from "../../types/article";

import { articleInfoModalStyles } from "./article-info-modal-styles";

interface ArticleInfoModalProps {
  showDeleteArticleModal: boolean;
  setShowDeleteArticleModal: (showDeleteArticleModal: boolean) => void;
  article: Article;
}

const WINDOW_HEIGHT = Dimensions.get("window").height;

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
          style={{
            position: "absolute",
            right: "13%",
            ...Platform.select({
              ios: {
                top: "32%",
              },
              android: {
                top: WINDOW_HEIGHT - WINDOW_HEIGHT * 0.715,
              },
            }),
            zIndex: 10,
            backgroundColor: "red",
            borderRadius: 100,
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* TODO: prettify this component */}
          <FontAwesome5 name="times" size={18} color="white" />
        </TouchableOpacity>
        <View style={articleInfoModalStyles.modalView}>
          <View style={{ gap: 5, marginBottom: 15 }}>
            <Text style={articleInfoModalStyles.title}>
              Información del artículo
            </Text>
            <Text style={articleInfoModalStyles.label}>
              Código de barras:{" "}
              <Text style={articleInfoModalStyles.value}>
                {article.barcode}
              </Text>
            </Text>

            <Text style={articleInfoModalStyles.label}>
              Creado:{" "}
              <Text style={articleInfoModalStyles.value}>
                {article.createdAt.split("T")[0].split("-").reverse().join("/")}
              </Text>
            </Text>
            <Text style={articleInfoModalStyles.label}>
              Actualizado:{" "}
              <Text style={articleInfoModalStyles.value}>
                {article.updatedAt.split("T")[0].split("-").reverse().join("/")}
              </Text>
            </Text>

            <Text style={articleInfoModalStyles.label}>
              Nombre:{" "}
              <Text style={articleInfoModalStyles.value}>{article.name}</Text>
            </Text>

            <Text style={articleInfoModalStyles.label}>
              Exhibición:{" "}
              <Text style={articleInfoModalStyles.value}>
                {article.exhibition}
              </Text>
            </Text>

            <Text style={articleInfoModalStyles.label}>
              Estantería:{" "}
              <Text style={articleInfoModalStyles.value}>{article.shelf}</Text>
            </Text>

            <Text style={articleInfoModalStyles.label}>
              Almacén:{" "}
              <Text style={articleInfoModalStyles.value}>
                {article.warehouse}
              </Text>
            </Text>
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
