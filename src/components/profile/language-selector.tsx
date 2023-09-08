import { View, Text, Image, StyleSheet } from "react-native";
import { profileStyles } from "../../screens/profile-screen/profile-styles";
import { LANGUAGE_FLAGS } from "../../../assets";
import { WORLD } from "../../../assets/profile-images";

export function LanguageSelector() {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={profileStyles.profileDefaultLabel}>Idioma</Text>
        <Image source={WORLD} style={profileStyles.profileIcon} />
      </View>
      <View style={languageSelector.languageFlagsContainer}>
        <Image
          style={languageSelector.languageFlag}
          source={LANGUAGE_FLAGS.SPANISH_SPAIN}
          alt="ESPAÑOL"
        />
        <Image
          style={languageSelector.languageFlag}
          source={LANGUAGE_FLAGS.ENGLISH_USA}
          alt="ESPAÑOL"
        />
      </View>
    </View>
  );
}

const languageSelector = StyleSheet.create({
  languageFlagsContainer: {
    flexDirection: "row",
    gap: 40,
  },
  languageFlag: {
    width: 50,
    height: 50,
    objectFit: "contain",
  },
});
