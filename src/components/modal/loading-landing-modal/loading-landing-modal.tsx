import { Alert, Modal, StyleSheet, Text, ActivityIndicator, View } from "react-native";
import { BLUE_PALLETE } from "../../../constants/colors/colors";

interface LoadingLandingModalProps {
	modalVisible: boolean;
	setModalVisible: (modalVisible: boolean) => void;
	modalText: string;
}

export function LoadingLandingModal(props: LoadingLandingModalProps) {
	const { modalVisible, setModalVisible, modalText } = props;

	return (
		<View style={styles.centeredView}>
			<Modal
				style={styles.modalView}
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>{modalText}</Text>
						<ActivityIndicator size="large" color={BLUE_PALLETE.BLUE} />
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 45,
		position: "absolute",
		alignSelf: "center",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
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
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});
