import { Pressable, Text, StyleSheet } from "react-native";
import { BLUE_PALLETE } from "../../constants/colors/colors";

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
        style={[
          styles.textButton,
          {
            color: outLined
              ? BLUE_PALLETE.BUTTON_DEFALUT
              : BLUE_PALLETE.PRIMARY_WHITE,
          },
        ]}
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
    borderColor: BLUE_PALLETE.BUTTON_DEFALUT,
    borderWidth: 2,
  },
  textButton: {
    fontWeight: "bold",
    alignSelf: "center",
  },
});
