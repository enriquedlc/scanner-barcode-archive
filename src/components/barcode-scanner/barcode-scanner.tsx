import { BarCodeScanner } from "expo-barcode-scanner";
import { Platform, StyleSheet, Text, View } from "react-native";

import { ArticleForm } from "../article-form/article-form";
import { useScanner } from "./useScanner";

export function BarcodeScanner() {
	const {
		handleBarCodeScanned,
		hasPermission,
		scannedBarcode,
		setScannedBarcode,
		setShowArticleForm,
		showArticleForm,
	} = useScanner();

	if (!hasPermission) {
		return (
			<View style={styles.container}>
				<Text>Please grant camera permissions to app.</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<BarCodeScanner
				style={styles.barcodeScannerCamera}
				onBarCodeScanned={handleBarCodeScanned}
			/>
			<ArticleForm
				visible={scannedBarcode.length > 0 && showArticleForm}
				setShowArticleForm={setShowArticleForm}
				scannedBarcode={scannedBarcode}
				setScannedBarcode={setScannedBarcode}
				articleButtonActionText="Crear"
				articleFormTitle="Crear artículo"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	barcodeScannerCamera: {
		borderRadius: 10,
		width: Platform.OS === "ios" ? "90%" : "90%",
		height: Platform.OS === "ios" ? "80%" : "80%",
	},
});
