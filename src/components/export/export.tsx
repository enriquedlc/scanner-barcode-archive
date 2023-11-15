import { StyleSheet, Text, View } from "react-native";

export function Export() {
	return (
		<View style={styles.container}>
			<Text>Export</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
