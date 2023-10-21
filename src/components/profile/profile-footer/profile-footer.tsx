import { StyleSheet, View } from "react-native";

import { ButtonIcon } from "../../button-icon/button-icon";

import { useUserAuthStore } from "../../../store/user-auth";

import { useState } from "react";
import { INFO_CIRCLE, LOGOUT } from "../../../../assets/profile-images";
import { BLUE_PALLETE } from "../../../constants/colors/colors";
import { ConfirmLogout } from "../modals/confirm-logout";

export function ProfileFooter() {
	const logout = useUserAuthStore((state) => state.logout);

	// const [showAttributionsModal, setShowAttributionsModal] = useState(false);
	const [showConfirmLogoutModal, setShowConfirmLogoutModal] = useState(false);

	return (
		<View style={profileFooterStyles.profileFooterContainer}>
			<ButtonIcon
				// TODO: implement modal with info about the app, its purpose and its
				// creators and contributors mention to the people who made the icons
				icon={INFO_CIRCLE}
				label="Atribuciones"
				outlineColor={BLUE_PALLETE.BLUE}
				action={() => console.log("atribuciones")}
			/>
			<ButtonIcon
				icon={LOGOUT}
				label="Cerrar Sesión"
				outlineColor="red"
				action={() => setShowConfirmLogoutModal(true)}
			/>
			<ConfirmLogout
				visible={showConfirmLogoutModal}
				setShowConfirmLogoutModal={setShowConfirmLogoutModal}
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
