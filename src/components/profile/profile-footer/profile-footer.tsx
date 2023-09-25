import { View, StyleSheet } from "react-native";

import { ProfileFooterButton } from "./profile-footer-button";

import { INFO_CIRCLE, LOGOUT } from "../../../../assets/profile-images";
import { BLUE_PALLETE } from "../../../constants/colors/colors";
import { useUserAuthStore } from "../../../store/user-auth";

export function ProfileFooter() {
  const logout = useUserAuthStore((state) => state.logout);

  return (
    <View style={profileFooterStyles.profileFooterContainer}>
      <ProfileFooterButton
        icon={INFO_CIRCLE}
        label="Atribuciones"
        outlineColor={BLUE_PALLETE.BLUE}
        action={() => console.log("atribuciones")}
      />
      <ProfileFooterButton
        icon={LOGOUT}
        label="Cerrar Sesión"
        outlineColor="red"
        action={logout}
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
