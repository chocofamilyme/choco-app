export interface IRahmetApp {
    authorize: () => void;
    pay: (deeplink: string) => void;
    backToRahmetApp: () => void;
    isLocationEnabled?: () => boolean;
    requestGeoPermissionStatus: () => void;
    openQRScannerWithTextResult: () => void;
}
