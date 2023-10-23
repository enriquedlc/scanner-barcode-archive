import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { ButtonIcon } from "../../button-icon/button-icon";

import { INFO_CIRCLE, LOGOUT } from "../../../../assets/profile-images";
import { useUserPreferencesStore } from "../../../store/user-preferences";
import { ConfirmLogout } from "../modals/confirm-logout";

export function ProfileFooter() {
	// const [showAttributionsModal, setShowAttributionsModal] = useState(false);
	const [showConfirmLogoutModal, setShowConfirmLogoutModal] = useState(false);
	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	return (
		<View style={profileFooterStyles.profileFooterContainer}>
			<ButtonIcon
				// TODO: implement modal with info about the app, its purpose and its
				// creators and contributors mention to the people who made the icons
				icon={INFO_CIRCLE}
				label="Atribuciones"
				outlineColor={colorScheme.MAIN}
				action={() => console.log("atribuciones")}
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
