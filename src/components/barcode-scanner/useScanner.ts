import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";

import { ScannedData } from "../../types/types";

export const useScanner = () => {
	const [hasPermission, setHasPermission] = useState(false);
	const [scannedBarcode, setScannedBarcode] = useState<ScannedData["data"]>("");
	const [showArticleForm, setShowArticleForm] = useState(false);

	useEffect(() => {
		if (hasPermission) return;
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, [hasPermission]);

	const handleBarCodeScanned = (scannedData: ScannedData) => {
		setScannedBarcode(scannedData.data);
		console.log("handleBarCodeScanned", scannedData.data);
		setShowArticleForm(true);

		console.log(`Type: ${scannedData.type}`);
		console.log(`Data: ${scannedData.data}`);
	};

	return {
		hasPermission,
		scannedBarcode,
		setScannedBarcode,
		handleBarCodeScanned,
		setShowArticleForm,
		showArticleForm,
	};
};
