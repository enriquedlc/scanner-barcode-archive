import { Modal, StyleSheet, Text, View } from "react-native";

import { ButtonIcon } from "../button-icon/profile-footer-button";

import { ARROW_BACK, TRASH } from "../../../assets/profile-images";

import { BLUE_PALLETE } from "../../constants/colors/colors";
import { FONT_SIZES } from "../../constants/font";

interface ConfirmLogoutProps {
	visible: boolean;
	setShowConfirmDeleteArticleModal: (show: boolean) => void;
	action: () => void;
}

export function ArticleDeleteModal(props: ConfirmLogoutProps) {
	const { visible, setShowConfirmDeleteArticleModal: setShowConfirmLogoutModal, action } = props;

	return (
		<Modal animationType="fade" transparent={true} visible={visible}>
			<View style={styles.centeredView}>
				<View style={styles.confirmLogoutModal}>
					<Text style={styles.confirmLogoutModalTitle}>
						Confirmación: borrar artículo
					</Text>
					<View style={styles.buttonsContainer}>
						<ButtonIcon
							icon={ARROW_BACK}
							label="Volver"
							outlineColor={BLUE_PALLETE.BLUE}
							action={() => setShowConfirmLogoutModal(false)}
						/>
						<ButtonIcon
							icon={TRASH}
							label="Borrar"
							outlineColor="red"
							action={action}
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
