import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

import { ScannedData } from "../../types/types";
import { INITIAL_ARTICLE_FORM_STATE } from "../../constants/states/initial-states";
import { Article } from "../../types/article";
import { useShowToast } from "../../hooks/useShowToast";
import { createArticle } from "../../services/articles";
import { ArticleFormNumberInput } from "./article-form-input/article-form-number-input";
import { ArticleFormTextInput } from "./article-form-input/article-form-text-input";

import { articleInfoModalStyles } from "../article-info-modal/article-info-modal-styles";
import { articleFormStyles } from "./article-form-styles";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { User, useUserAuthStore } from "../../store/user-auth";
import { useArticlesStore } from "../../store/articles";

interface ArticleFormProps {
  visible: boolean;
  setShowArticleForm: (showArticleForm: boolean) => void;
  scannedBarcode: ScannedData["data"];
  setScannedBarcode: (scannedBarcode: ScannedData["data"]) => void;
}

export function ArticleForm(props: ArticleFormProps) {
  const { visible, scannedBarcode, setScannedBarcode, setShowArticleForm } =
    props;

  console.log("aaaaaaaaaaaaaaaa", scannedBarcode);

  const [scannedArticle, setScannedArticle] = useState<Article>(
    INITIAL_ARTICLE_FORM_STATE
  );

  const { showToast } = useShowToast();
  const { navigation } = useAppNavigation();
  const user = useUserAuthStore((state) => state.user);
  const fetchArticles = useArticlesStore((state) => state.fetchArticles);

  function handleChangeText<T>(text: T, input: keyof Article) {
    setScannedArticle({ ...scannedArticle, [input]: text });
    console.log(scannedArticle);
  }

  const handleCreateArticle = async (
    article: Article,
    userId: User["id"],
    scannedBarcode: ScannedData["data"]
  ) => {
    const response = await createArticle(article, userId, scannedBarcode);

    console.info("fasdfaskjdfklñasdj cJAFKLSDJFALÑKSDJF", response?.created);
    if (response?.created) {
      console.log("article created");
      console.log(response);
      showToast("success", "Artículo creado", "");
      setShowArticleForm(false);
      fetchArticles(userId);
      navigation.navigate("HOME_SCREEN");
      return;
    }
    showToast("error", "Error al crear artículo", "");
  };

  return (
    <Modal animationType="fade" visible={visible}>
      <View style={articleFormStyles.centeredView}>
        <View style={articleFormStyles.modalView}>
          <Text style={articleFormStyles.title}>Crear Artículo</Text>
          <Text style={articleFormStyles.title}>{scannedBarcode}</Text>
          <ArticleFormTextInput
            value={scannedArticle.articleName}
            setValue={(text) => handleChangeText(text, "articleName")}
            placeholder={"Nombre"}
          />
          <ArticleFormTextInput
            value={scannedArticle.articleName}
            setValue={(text) => handleChangeText(text, "categoryName")}
            placeholder={"Nombre"}
          />
          <ArticleFormNumberInput
            label="Exibición"
            placeholder="0"
            setValue={(text) => handleChangeText(Number(text), "exhibition")}
            value={String(scannedArticle.exhibition)}
          />
          <ArticleFormNumberInput
            label="Estantería"
            placeholder="0"
            setValue={(text) => handleChangeText(Number(text), "shelf")}
            value={String(scannedArticle.shelf)}
          />
          <ArticleFormNumberInput
            label="Almacén"
            placeholder="0"
            setValue={(text) => handleChangeText(Number(text), "warehouse")}
            value={String(scannedArticle.warehouse)}
          />

          {/* <Text>Elegir icono</Text> */}
          <View style={articleInfoModalStyles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => {
                console.log(user?.id);
                if (user)
                  handleCreateArticle(scannedArticle, user?.id, scannedBarcode);
              }}
              style={articleInfoModalStyles.editButton}
            >
              <Text style={articleInfoModalStyles.deleteText}>Crear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setScannedBarcode("");
                console.log("go back home!");
              }}
              style={articleInfoModalStyles.deleteButton}
            >
              <Text style={articleInfoModalStyles.cancelText}>Volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
