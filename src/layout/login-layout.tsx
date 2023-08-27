import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";

import { LOGIN_COLORS } from "../constants/colors";

type LoginLayoutProps = {
  children: ReactNode;
};

export function LoginLayout(props: LoginLayoutProps) {
  const { children } = props;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.firstBubble}>{children}</View>
        <View style={styles.secondBubble} />
        <View style={styles.thridBubble}>
          <Text style={styles.title}>ARTICLE SCANNER📦</Text>
        </View>
      </View>
    </>
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
    color: LOGIN_COLORS.BLUE_BACKGROUND,
    alignSelf: "center",
    bottom: 30,
  },
  firstBubble: {
    zIndex: -10,
    width: "130%",
    backgroundColor: LOGIN_COLORS.BLUE_BACKGROUND,
    height: "80%",
    borderTopEndRadius: 400,
    borderTopStartRadius: 400,
    position: "absolute",
    bottom: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  secondBubble: {
    zIndex: -20,
    width: "130%",
    backgroundColor: LOGIN_COLORS.GRAY_BACKGROUND,
    height: "100%",
    borderTopEndRadius: 400,
    borderTopStartRadius: 400,
    position: "absolute",
    bottom: -150,
  },
  thridBubble: {
    zIndex: -30,
    width: "130%",
    backgroundColor: LOGIN_COLORS.LIGHT_GRAY_BACKGROUND,
    height: "100%",
    borderTopEndRadius: 400,
    borderTopStartRadius: 400,
    position: "relative",
    bottom: -100,
  },
});
