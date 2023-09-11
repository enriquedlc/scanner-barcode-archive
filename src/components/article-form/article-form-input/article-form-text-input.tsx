import { TextInput } from "react-native";
import { articleFormStyles } from "../article-form-styles";
import { Article } from "../../../types/article";

interface ArticleFormInputProps {
  value: string;
  setValue: (text: string, input: keyof Article) => void;
  placeholder: string;
}

export function ArticleFormTextInput(props: ArticleFormInputProps) {
  const { value, setValue, placeholder } = props;
  return (
    <TextInput
      style={articleFormStyles.textInput}
      placeholder={placeholder}
      placeholderTextColor={"lightgray"}
      onChange={(e) => {
        setValue(e.nativeEvent.text, value as keyof Article);
      }}
      value={value}
    />
  );
}
