import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

// TODO: refactor types
// TODO: extract functions / custom hook

export function BarcodeScanner() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scannedData, setScannedData] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScannedData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);
  };

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
