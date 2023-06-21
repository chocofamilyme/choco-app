import { GeoStatus } from '../enum/geo-status.enum';

export interface IRahmetWebApp {
    onAuthSuccess: (trackId: string) => unknown;
    onAuthDismissed: () => unknown;
    onPaySuccess: () => unknown;
    onNativePayViewClosed: () => unknown;
    onGeoPermissionStatusDefined: (status: GeoStatus) => GeoStatus | void;
    didBecomeActive: Function;
    onBackPressed: () => boolean;
    didScanQrText: (text: string) => string | void;
    didGetReferralCode: (code: string) => unknown;
    onKeyboardClosed: Function;
}
