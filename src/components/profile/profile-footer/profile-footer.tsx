import { StyleSheet, View } from "react-native";

import { ProfileFooterButton } from "./profile-footer-button";

import { useUserAuthStore } from "../../../store/user-auth";

import { INFO_CIRCLE, LOGOUT } from "../../../../assets/profile-images";
import { BLUE_PALLETE } from "../../../constants/colors/colors";

export function ProfileFooter() {
  const logout = useUserAuthStore((state) => state.logout);

  return (
    <View style={profileFooterStyles.profileFooterContainer}>
      <ProfileFooterButton
        // TODO: implement modal with info about the app, its purpose and its
        // creators and contributors mention to the people who made the icons
        icon={INFO_CIRCLE}
        label="Atribuciones"
        outlineColor={BLUE_PALLETE.BLUE}
        action={() => console.log("atribuciones")}
      />
      <ProfileFooterButton
        // TODO: implement modal asking for confirmation,
        // confirming will call logout and rederict to landing page
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
