import { useState } from "react";
import { Modal, Text, View } from "react-native";

import { ArticleFormTextInput } from "./article-form-input/article-form-text-input";

import { articleFormStyles } from "./article-form-styles";
import { Article } from "../../types/article";

const INITIAL_ARTICLE_FORM_STATE: Article = {
  id: "",
  name: "",
  exhibition: 0,
  shelf: 0,
  warehouse: 0,
  barcode: "",
  createdAt: "",
  updatedAt: "",
};

export function ArticleForm() {
  const [scannedArticle, setScannedArticle] = useState(
    INITIAL_ARTICLE_FORM_STATE
  );

  const handleChangeText = (text: string, input: keyof Article) => {
    setScannedArticle({ ...scannedArticle, [input]: text });
    console.log(scannedArticle);
  };

  return (
    <Modal
      animationType="fade"
      // visible={    }
    >
      <View style={articleFormStyles.centeredView}>
        <View style={articleFormStyles.modalView}>
          <Text style={articleFormStyles.title}>Article Form</Text>
          <ArticleFormTextInput
            value={scannedArticle.name}
            setValue={handleChangeText}
            placeholder={"Nombre"}
          />
        </View>
      </View>
    </Modal>
  );
}
