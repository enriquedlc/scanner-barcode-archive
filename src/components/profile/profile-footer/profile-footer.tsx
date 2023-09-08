import { View, StyleSheet } from "react-native";

import { INFO_CIRCLE, LOGOUT } from "../../../../assets/profile-images";
import { BLUE_PALLETE } from "../../../constants/colors/colors";

import { ProfileFooterButton } from "./profile-footer-button";

export function ProfileFooter() {
  return (
    <View style={profileFooterStyles.profileFooterContainer}>
      <ProfileFooterButton
        icon={INFO_CIRCLE}
        label="Atribuciones"
        outlineColor={BLUE_PALLETE.BLUE}
      />
      <ProfileFooterButton
        icon={LOGOUT}
        label="Cerrar Sesión"
        outlineColor="red"
      />
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
