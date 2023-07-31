import { connect } from '../utils';
import { BarcodeFormat } from '../ts/enum';

/**
 * При успешном сканировании возвращает строку с штрихкодом.
 * При нажатии на ручной ввод возвращает строку 'manual'.
 */
export const openBarcodeScanner = (
    formats: BarcodeFormat[] = [BarcodeFormat.EAN_8, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128],
    instructions: string[] = []
): Promise<string | 'manual'> => {
    return connect((resolve: (text: string) => string) => {
        if (!window.RahmetApp.openBarcodeScanner) {
            return resolve('manual');
        }

        window.RahmetApp.openBarcodeScanner(JSON.stringify({ formats, instructions }));
        window.RahmetWebApp.onBarcodeScannerSuccess = barcode => resolve(barcode);
        window.RahmetWebApp.onTapBarcodeEnter = () => resolve('manual');
    });
};
