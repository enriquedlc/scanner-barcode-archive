import { Modal, StyleSheet, Text, View } from "react-native";

import { useAppNavigation } from "../../../hooks/useAppNavigation";
import { useUserAuthStore } from "../../../store/user-auth";
import { ButtonIcon } from "../../button-icon/button-icon";

import { ARROW_BACK, LOGOUT } from "../../../../assets/profile-images";
import { BLUE_PALLETE } from "../../../constants/colors/colors";
import { FONT_SIZES } from "../../../constants/font";

interface ConfirmLogoutProps {
	visible: boolean;
	setShowConfirmLogoutModal: (show: boolean) => void;
}

export function ConfirmLogout(props: ConfirmLogoutProps) {
	const { visible, setShowConfirmLogoutModal } = props;

	const logout = useUserAuthStore((state) => state.logout);
	const { navigation } = useAppNavigation();

	const handleLogout = () => {
		logout();
		setShowConfirmLogoutModal(false);
		navigation.navigate("LANDING_SCREEN");
	};

	const goBack = () => {
		setShowConfirmLogoutModal(false);
		navigation.navigate("PROFILE_SCREEN");
	};

	return (
		<Modal animationType="fade" transparent={true} visible={visible}>
			<View style={styles.centeredView}>
				<View style={styles.confirmLogoutModal}>
					<Text style={styles.confirmLogoutModalTitle}>
						¿Estás seguro que deseas cerrar sesión?
					</Text>
					<View style={styles.buttonsContainer}>
						<ButtonIcon
							icon={ARROW_BACK}
							label="Volver"
							outlineColor={BLUE_PALLETE.BLUE}
							action={goBack}
							displayLabel={true}
						/>
						<ButtonIcon
							icon={LOGOUT}
							label="Cerrar Sesión"
							outlineColor="red"
							action={handleLogout}
							displayLabel={true}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	confirmLogoutModal: {
		width: "90%",
		backgroundColor: "white",
		borderRadius: 10,
		padding: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	confirmLogoutModalTitle: {
		fontSize: FONT_SIZES.LARGE,
		fontWeight: "bold",
		paddingBottom: 20,
	},
	buttonsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
	},
});
