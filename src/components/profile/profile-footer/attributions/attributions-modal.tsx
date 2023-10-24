import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SQUARE_X } from "../../../../../assets/profile-images";
import { FONT_SIZES } from "../../../../constants/font";
import { AttributionItem } from "./attribution-item";

import { ATTRIBUTION_DATA } from "../../../../constants/attributions/data";

interface AttributionsModalProps {
	visible: boolean;
	setShowAttributionsModal: (show: boolean) => void;
}

export function AttributionsModal(props: AttributionsModalProps) {
	const { visible, setShowAttributionsModal } = props;

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={visible}
			style={styles.attributionsModalContainer}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalTitle}>Atribuciones</Text>
					<ScrollView
						indicatorStyle="black"
						style={{
							maxHeight: "95%",
						}}
					>
						<View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
							{ATTRIBUTION_DATA.map((attribution) => (
								<AttributionItem
									key={attribution.id}
									image={attribution.image}
									linkUrl={attribution.link}
								/>
							))}
						</View>
					</ScrollView>
					<TouchableOpacity
						style={styles.closeButton}
						onPress={() => setShowAttributionsModal(false)}
					>
						<Image
							source={SQUARE_X}
							style={{ width: 26, height: 26 }}
							tintColor={"red"}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	attributionsModalContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		minWidth: "80%",
		height: "70%",
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
	closeButton: {
		position: "absolute",
		top: 10,
		right: 10,
	},
	modalTitle: {
		fontSize: FONT_SIZES.MEDIUM_MEDIUM,
		fontWeight: "bold",
		marginBottom: 15,
	},
});
