import { Pressable, Text, StyleSheet } from "react-native";

type ButtonLandingProps = {
  title: string;
  outLined?: boolean;
};

export function ButtonLanding(props: ButtonLandingProps) {
  const { title, outLined } = props;

  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: outLined ? "transparent" : "#2f54f0" },
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
    borderColor: "#2f54f0",
    borderWidth: 2,
  },
  textButton: {
    fontWeight: "bold",
  },
});
