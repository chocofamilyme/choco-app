import { GeoStatus } from '../enum/';

export interface IRahmetWebApp {
    onAuthSuccess: (trackId: string) => unknown;
    onAuthSuccessV2: (code: string, state: any) => unknown;
    onAuthDismissed: () => unknown;
    onPaySuccess: () => unknown;
    onNativePayViewClosed: () => unknown;
    onGeoPermissionStatusDefined: (status: GeoStatus) => GeoStatus | void;
    didBecomeActive: Function;
    onBackPressed: () => boolean;
    didScanQrText: (text: string) => string | void;
    didGetReferralCode: (code: string) => unknown;
    onKeyboardClosed: Function;
    onCameraPermissionStatusDefined: (status: boolean) => boolean;
    onBarcodeScannerSuccess: (barcode: string) => string;
    onTapBarcodeEnter: () => void;
}
