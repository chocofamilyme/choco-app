export interface IRahmetApp {
    authorize: () => void;
    authorizeV2?: (body: string) => void;
    pay: (deeplink: string) => void;
    backToRahmetApp: () => void;
    isLocationEnabled?: () => boolean;
    requestGeoPermissionStatus: () => void;
    openQRScannerWithTextResult: () => void;
    hapticSelection: () => void;
    getReferralCode: () => void;
    loadBase64File?: (json: string) => void;
    shareImage?: (json: string) => void;
    shareText?: (text: string) => void;
    clearCache?: () => void;
    reloadPage?: () => void;
    logAmplitudeEvent?: (body: string) => void;
    openBarcodeScanner?: (body: string) => void;
    isCameraPermissionEnabled?: () => void;
}
