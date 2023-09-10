import { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';

import { useShowToast } from '../../hooks/useShowToast';

import { ScannedData } from '../../types/types';

export const useScanner = () => {

    const { showToast } = useShowToast();

    const [hasPermission, setHasPermission] = useState(false);
    const [scannedData, setScannedData] = useState("");

    console.log('has persmission', hasPermission)

    useEffect(() => {
        if (hasPermission) return;
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, [hasPermission]);

    const handleBarCodeScanned = (scannedData: ScannedData) => {
        setScannedData(scannedData.data);

        if (scannedData) showToast("info", "Artículo escaneado", "artículo escaneado correctamente", 5000);

        console.log(`Type: ${scannedData.type}`);
        console.log(`Data: ${scannedData.data}`);
    };

    return { hasPermission, scannedData, setScannedData, handleBarCodeScanned }
}