import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

import { ScannedData } from "../../types/types";
import { INITIAL_ARTICLE_FORM_STATE } from "../../constants/states/initial-states";
import { Article } from "../../types/article";

import { ArticleFormNumberInput } from "./article-form-input/article-form-number-input";
import { ArticleFormTextInput } from "./article-form-input/article-form-text-input";

import { articleInfoModalStyles } from "../article-info-modal/article-info-modal-styles";
import { articleFormStyles } from "./article-form-styles";

interface ArticleFormProps {
  visible: boolean;
  scannedBarcode: ScannedData["data"];
  setScannedBarcode: (scannedBarcode: ScannedData["data"]) => void;
}

export function ArticleForm(props: ArticleFormProps) {
  const { visible, scannedBarcode, setScannedBarcode } = props;

  const [scannedArticle, setScannedArticle] = useState<Article>(
    INITIAL_ARTICLE_FORM_STATE
  );

  function handleChangeText<T>(text: T, input: keyof Article) {
    setScannedArticle({ ...scannedArticle, [input]: text });
    console.log(scannedArticle);
  }

  return (
    <Modal animationType="fade" visible={visible}>
      <View style={articleFormStyles.centeredView}>
        <View style={articleFormStyles.modalView}>
          <Text style={articleFormStyles.title}>Crear Artículo</Text>
          <Text style={articleFormStyles.title}>{scannedBarcode}</Text>
          <ArticleFormTextInput
            value={scannedArticle.name}
            setValue={(text) => handleChangeText(text, "name")}
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
              onPress={() => console.log("create action!")}
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
