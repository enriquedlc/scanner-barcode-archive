import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useUserPreferencesStore } from "../../../store/user-preferences";
import { ButtonIcon } from "../../button-icon/button-icon";
import { ConfirmLogout } from "../modals/confirm-logout";
import { AttributionsModal } from "./attributions/attributions-modal";

import { INFO_CIRCLE, LOGOUT } from "../../../../assets/profile-images";

export function ProfileFooter() {
	// const [showAttributionsModal, setShowAttributionsModal] = useState(false);
	const [showConfirmLogoutModal, setShowConfirmLogoutModal] = useState(false);
	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	const [showAttributionsModal, setShowAttributionsModal] = useState(false);

	return (
		<View style={profileFooterStyles.profileFooterContainer}>
			<AttributionsModal
				visible={showAttributionsModal}
				setShowAttributionsModal={setShowAttributionsModal}
			/>
			<ButtonIcon
				icon={INFO_CIRCLE}
				label="Atribuciones"
				outlineColor={colorScheme.MAIN}
				action={() => setShowAttributionsModal(true)}
				displayLabel={true}
			/>
			<ButtonIcon
				icon={LOGOUT}
				label="Cerrar Sesión"
				outlineColor="red"
				action={() => setShowConfirmLogoutModal(true)}
				displayLabel={true}
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
