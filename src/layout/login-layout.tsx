import { ReactNode } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { BLUE_PALLETE } from "../constants/colors";

type LoginLayoutProps = {
  children: ReactNode;
  firstBubbleButtomY: number;
  secondBubbleButtomY: number;
  thirdBubbleButtomY: number;
};

export function LoginLayout(props: LoginLayoutProps) {
  const {
    children,
    firstBubbleButtomY,
    secondBubbleButtomY,
    thirdBubbleButtomY,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={[{ bottom: firstBubbleButtomY }, styles.firstBubble]}>
          {children}
        </View>
        <View style={[{ bottom: secondBubbleButtomY }, styles.secondBubble]} />
        <View style={[{ bottom: thirdBubbleButtomY }, styles.thridBubble]}>
          <Text style={styles.title}>scan 📦</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: BLUE_PALLETE.PRIMARY_BLACK,
    alignSelf: "center",
    bottom: 30,
  },
  firstBubble: {
    zIndex: -10,
    width: "130%",
    backgroundColor: BLUE_PALLETE.PRIMARY,
    height: "100%",
    borderTopEndRadius: 400,
    borderTopStartRadius: 400,
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    // bottom: -30,
  },
  secondBubble: {
    zIndex: -20,
    width: "130%",
    backgroundColor: BLUE_PALLETE.SECONDARY,
    height: "100%",
    borderTopEndRadius: 400,
    borderTopStartRadius: 400,
    position: "absolute",
    // bottom: -150,
  },
  thridBubble: {
    zIndex: -30,
    width: "130%",
    backgroundColor: BLUE_PALLETE.TERTIARY,
    height: "100%",
    borderTopEndRadius: 400,
    borderTopStartRadius: 400,
    position: "relative",
    // bottom: -100,
  },
});
