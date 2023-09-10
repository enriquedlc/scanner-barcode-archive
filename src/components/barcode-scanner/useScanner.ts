import { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';

import { ScannedData } from '../../types/types';

export const useScanner = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scannedData, setScannedData] = useState("");

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = (scannedData: ScannedData) => {
        setScannedData(scannedData.data);
        console.log(`Type: ${scannedData.type}`);
        console.log(`Data: ${scannedData.data}`);
    };

    return { hasPermission, scannedData, setScannedData, handleBarCodeScanned }
}