import { GeoStatus, NotificationStatus } from '../enum';

export interface IRahmetWebApp {
    onAuthSuccess: (trackId: string) => unknown;
    onAuthSuccessV2: (code: string, state: any) => unknown;
    onAuthDismissed: () => unknown;
    onAuthError: (code?: number, message?: string) => unknown;
    onPaySuccess: () => unknown;
    onNativePayViewClosed: () => unknown;
    onGeoPermissionStatusDefined: (status: GeoStatus) => GeoStatus | void;
    didBecomeActive: Function;
    onBackPressed: () => boolean;
    didScanQrText: (text: string) => string | void;
    didGetReferralCode: (code: string) => unknown;
    onKeyboardClosed: Function;
    onCameraPermissionStatusDefined: (status: boolean) => unknown;
    onBarcodeScannerSuccess: (barcode: string) => unknown;
    onTapBarcodeEnter: () => void;
    didGetIsNotificationStatus: (status: NotificationStatus) => NotificationStatus;
    onCardAdded: () => unknown;
}
