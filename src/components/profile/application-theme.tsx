import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FONT_SIZES } from "../../constants/font";
import { BLUE_PALLETE } from "../../constants/colors/colors";

export function ApplicationTheme() {
  return (
    <View style={applicationThemeSelector.appThemeChangerLabelContainer}>
      <Text style={applicationThemeSelector.profileDefaultLabel}>
        Tema de la aplicación
      </Text>
      <View style={applicationThemeSelector.themeColorsContainer}>
        <LinearGradient
          style={applicationThemeSelector.themeColor}
          colors={["blue", "#3b5998", "blue"]}
          start={{ x: 0, y: 3 }}
        />
        <LinearGradient
          style={applicationThemeSelector.themeColor}
          // orange
          colors={["#ff9966", "#ff5e62", "#ff9966"]}
          start={{ x: 0, y: 3 }}
        />
        <LinearGradient
          style={applicationThemeSelector.themeColor}
          // purple
          colors={["#cc2b5e", "#753a88", "#cc2b5e"]}
          start={{ x: 0, y: 3 }}
        />
        <LinearGradient
          style={applicationThemeSelector.themeColor}
          // green
          colors={["#11998e", "#38ef7d", "#11998e"]}
          start={{ x: 0, y: 3 }}
        />
      </View>
    </View>
  );
}

const applicationThemeSelector = StyleSheet.create({
  appThemeChangerLabelContainer: {
    flexDirection: "column",
  },
  profileDefaultLabel: {
    fontSize: FONT_SIZES.MEDIUM,
    fontWeight: "bold",
    paddingTop: 20,
    textAlign: "left",
  },
  themeColorsContainer: {
    flexDirection: "row",
  },
  themeColor: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1,
    marginRight: 40,
    marginTop: 10,
  },
  themeColorSelected: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1,
    marginRight: 40,
    marginTop: 10,

    borderColor: BLUE_PALLETE.BLUE,
    backgroundColor: BLUE_PALLETE.BLUE,
  },
});
