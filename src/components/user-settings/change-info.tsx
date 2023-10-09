import { SafeAreaView, StyleSheet, Text } from "react-native";

type ChangeInfoProps = {};

export function ChangeInfo() {
	return (
		<SafeAreaView style={styles.changeInfoContainer}>
			<Text>Change info</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	changeInfoContainer: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: 50,
	},
});
