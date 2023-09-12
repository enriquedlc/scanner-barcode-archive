import { TextInput, View, Text, StyleSheet } from "react-native";

import { Article } from "../../../types/article";
import { FONT_SIZES } from "../../../constants/font";

interface ArticleFormNumberInputProps {
  label: string;
  value: string;
  setValue: (text: string, input: keyof Article) => void;
  placeholder: string;
}

export function ArticleFormNumberInput(props: ArticleFormNumberInputProps) {
  const { label, value, setValue, placeholder } = props;
  return (
    <View style={styles.numericInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder={placeholder}
        placeholderTextColor={"lightgray"}
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
    paddingVertical: 10,
  },
  label: {
    fontSize: FONT_SIZES.MEDIUM,
  },
  input: {
    fontSize: FONT_SIZES.MEDIUM,
    width: "20%",
    height: 25,
    borderWidth: 1,
    borderColor: "lightgray",
    textAlign: "center",
    borderRadius: 5,
  },
});
