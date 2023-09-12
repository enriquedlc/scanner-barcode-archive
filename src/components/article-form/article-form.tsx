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

  const [scannedArticle, setScannedArticle] = useState(
    INITIAL_ARTICLE_FORM_STATE
  );

  const handleChangeText = (text: string, input: keyof Article) => {
    setScannedArticle({ ...scannedArticle, [input]: text });
    console.log(scannedArticle);
  };

  return (
    <Modal animationType="fade" visible={visible}>
      <View style={articleFormStyles.centeredView}>
        <View style={articleFormStyles.modalView}>
          <Text style={articleFormStyles.title}>Crear Artículo</Text>
          <Text style={articleFormStyles.title}>{scannedBarcode}</Text>
          <ArticleFormTextInput
            value={scannedArticle.name}
            setValue={handleChangeText}
            placeholder={"Nombre"}
          />
          <ArticleFormNumberInput
            label="Exibición"
            placeholder="0"
            setValue={handleChangeText}
            value={scannedArticle.exhibition}
          />
          <ArticleFormNumberInput
            label="Estantería"
            placeholder="0"
            setValue={handleChangeText}
            value={scannedArticle.shelf}
          />
          <ArticleFormNumberInput
            label="Almacén"
            placeholder="0"
            setValue={handleChangeText}
            value={scannedArticle.warehouse}
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
