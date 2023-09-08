import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

import { INFO_CIRCLE, LOGOUT } from "../../../../assets/profile-images";
import { BLUE_PALLETE } from "../../../constants/colors/colors";

import { profileStyles } from "../../../screens/profile-screen/profile-styles";

export function ProfileFooter() {
  return (
    <View style={profileFooterStyles.profileFooterContainer}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignSelf: "center",
          borderWidth: 2,
          borderColor: BLUE_PALLETE.BLUE,
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 2,
          borderRadius: 10,
        }}
      >
        <Text style={profileStyles.profileDefaultLabel}>Atribuciones</Text>
        <Image source={INFO_CIRCLE} style={profileStyles.profileIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignSelf: "center",
          borderWidth: 2,
          borderColor: "red",
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 2,
          borderRadius: 10,
        }}
      >
        <Text style={profileStyles.profileDefaultLabel}>Cerrar Sesión</Text>
        <Image source={LOGOUT} style={profileStyles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
}

const profileFooterStyles = StyleSheet.create({
  profileFooterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
