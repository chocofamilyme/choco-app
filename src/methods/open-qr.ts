import { connect } from '../utils';

export const openQR = (): Promise<string> => {
    return connect((resolve: (text: string) => string) => {
        if (!window.RahmetApp.openQRScannerWithTextResult) {
            return resolve('');
        }

        window.RahmetApp.openQRScannerWithTextResult();
        window.RahmetWebApp.didScanQrText = text => resolve(text);
    });
};
