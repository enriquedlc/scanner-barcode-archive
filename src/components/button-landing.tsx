import { Pressable, Text, StyleSheet } from "react-native";
import { BUTTON_LADING_COLORS } from "../constants/colors";

type ButtonLandingProps = {
  title: string;
  outLined?: boolean;
  width?: number;
  onPress: () => void;
};

export function ButtonLanding(props: ButtonLandingProps) {
  const { title, outLined, onPress } = props;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: outLined ? "transparent" : "#2f54f0",
          width: props.width,
        },
      ]}
    >
      <Text
        style={[styles.textButton, { color: outLined ? "#2f54f0" : "white" }]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderColor: BUTTON_LADING_COLORS.DEFAULT,
    borderWidth: 2,
  },
  textButton: {
    fontWeight: "bold",
    alignSelf: "center",
  },
});
