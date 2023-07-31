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
        onTapBarcodeEnter: () => {}
    };
}

export * from './methods';
