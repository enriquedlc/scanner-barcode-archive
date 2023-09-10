import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { useScanner } from "./useScanner";

export function BarcodeScanner() {
  const { handleBarCodeScanned, hasPermission, scannedData, setScannedData } =
    useScanner();

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
        onBarCodeScanned={scannedData ? undefined : handleBarCodeScanned}
      />
      {scannedData && (
        // TODO: article form
        <Button title={"Scan Again"} onPress={() => setScannedData("")} />
      )}
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
