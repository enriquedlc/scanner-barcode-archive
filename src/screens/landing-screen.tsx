import { Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonLanding } from "../components/button-landing";

import { LOGOS, TOOLS } from "../../assets";
import { RootStackParamList, RootStackParamName } from "../constants/routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { FONT_SIZES } from "../constants/font";

export function LandingScreen() {
  const navigation =
    useNavigation<
      StackNavigationProp<RootStackParamList, RootStackParamName>
    >();

  return (
    <View style={styles.container}>
      <Image
        style={styles.splashLogo}
        source={LOGOS.SPLASH_LOGO}
        alt="article-scanner-logo"
      />
      <Text style={styles.title}>ARTICLE SCANNER</Text>
      <View style={styles.firstBubble}>
        <View style={styles.buttonsContainer}>
          <ButtonLanding
            title="Iniciar sesión"
            onPress={() => navigation.navigate("LOGIN")}
          />
          <ButtonLanding
            title="Crear cuenta"
            outLined={true}
            onPress={() => navigation.navigate("SIGN_UP")}
          />
        </View>
      </View>
      <Image source={TOOLS.hammer} alt="hammer" style={toolStyles.hammer} />
      <Image source={TOOLS.saw} alt="saw" style={toolStyles.saw} />
      <Image
        source={TOOLS.work_tools}
        alt="saw"
        style={toolStyles.work_tools}
      />
      <View style={styles.secondBubble} />
      <View style={styles.thridBubble} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  splashLogo: {
    width: "60%",
    height: "30%",
    top: "8%",
    position: "absolute",
    objectFit: "contain",
  },
  title: {
    top: "35%",
    position: "absolute",
    fontWeight: "bold",
    fontSize: FONT_SIZES.EXTRA_EXTRA_LARGE,
  },
  firstBubble: {
    zIndex: -10,
    width: "130%",
    backgroundColor: "#091940",
    height: "30%",
    borderTopEndRadius: 400,
    borderTopStartRadius: 400,
    position: "absolute",
    bottom: -50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    bottom: 15,
    justifyContent: "space-between",
    gap: 20,
  },
  secondBubble: {
    zIndex: -20,
    width: "130%",
    backgroundColor: "#e9eaef",
    height: "30%",
    borderTopEndRadius: 400,
    borderTopStartRadius: 400,
    position: "absolute",
    bottom: 80,
  },
  thridBubble: {
    zIndex: -30,
    width: "130%",
    backgroundColor: "#f2f3f7",
    height: "30%",
    borderTopEndRadius: 400,
    borderTopStartRadius: 400,
    position: "absolute",
    bottom: 210,
  },
});

const toolStyles = StyleSheet.create({
  hammer: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 160,
    right: 40,
  },
  saw: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 170,
    alignSelf: "center",
  },
  work_tools: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 160,
    left: 40,
  },
});
