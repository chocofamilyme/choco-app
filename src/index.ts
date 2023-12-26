import { NotificationStatus } from './ts/enum';

if (!window.RahmetWebApp) {
    window.RahmetWebApp = {
        onAuthSuccess: () => {},
        onAuthSuccessV2: () => {},
        onAuthDismissed: () => {},
        onPaySuccess: () => {},
        onNativePayViewClosed: () => {},
        onGeoPermissionStatusDefined: () => {},
        didBecomeActive: () => {},
        onBackPressed: () => false,
        didScanQrText: () => {},
        didGetReferralCode: () => {},
        onKeyboardClosed: () => {},
        onCameraPermissionStatusDefined: () => {},
        onBarcodeScannerSuccess: () => {},
        onTapBarcodeEnter: () => {},
        didGetIsNotificationStatus: () => NotificationStatus.notDetermined,
        onCardAdded: () => {}
    };
}

export * from './methods';
export * from './ts/enum';
