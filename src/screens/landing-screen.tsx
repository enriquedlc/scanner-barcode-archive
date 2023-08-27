import { Text, StyleSheet, View, Image } from "react-native";
import { SPLASH_LOGO } from "../../assets";
import { ButtonLanding } from "../components/button-landing";

export function LandingScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.splashLogo}
        source={SPLASH_LOGO}
        alt="article-scanner-logo"
      />
      <Text style={styles.title}>ARTICLE SCANNER</Text>
      <View style={styles.firstBubble}>
        <View style={styles.buttonsContainer}>
          <ButtonLanding title="Iniciar sesión" />
          <ButtonLanding title="Crear cuenta" outLined={true} />
        </View>
      </View>
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
    fontFamily: "Cascadia-code",
    fontWeight: "bold",
    fontSize: 20,
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
