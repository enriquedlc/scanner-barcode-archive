import { TextInput, View, Text, StyleSheet } from "react-native";

import { Article } from "../../../types/article";

interface ArticleFormNumberInputProps {
  label: string;
  value: string;
  setValue: (text: string, input: keyof Article) => void;
  placeholder: string;
}

export function ArticleFormNumberInput(props: ArticleFormNumberInputProps) {
  const { label, value, setValue, placeholder } = props;
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        keyboardType="numeric"
        placeholder={placeholder}
        placeholderTextColor={"lightgray"}
        value={value}
        onChange={(e) => setValue(e.nativeEvent.text, value as keyof Article)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  numericInputContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  label: {},
  input: {},
});
