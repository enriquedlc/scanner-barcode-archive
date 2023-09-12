import { BarCodeScanner } from "expo-barcode-scanner";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import { ArticleForm } from "../article-form/article-form";

import { useScanner } from "./useScanner";

export function BarcodeScanner() {
  const {
    handleBarCodeScanned,
    hasPermission,
    scannedBarcode,
    setScannedBarcode,
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
        onBarCodeScanned={scannedBarcode ? undefined : handleBarCodeScanned}
      />
      <ArticleForm
        visible={scannedBarcode !== ""}
        scannedBarcode={scannedBarcode}
        setScannedBarcode={setScannedBarcode}
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
    width: Dimensions.get("window").width - 30,
    height: Dimensions.get("window").height - 250,
    borderRadius: 20,
    overflow: "hidden",
  },
});
