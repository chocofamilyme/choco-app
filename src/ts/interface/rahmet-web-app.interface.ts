import { GeoStatus } from '../enum/geo-status.enum';

export interface IRahmetWebApp {
    onAuthSuccess: (trackId: string) => unknown;
    onAuthDismissed: () => unknown;
    onPaySuccess: () => unknown;
    onNativePayViewClosed: () => unknown;
    onGeoPermissionStatusDefined: (status: GeoStatus) => GeoStatus | void;
    didBecomeActive: Function;
    onBackPressed: () => unknown;
    didScanQrText: (text: string) => string | void;
}
