import { GeoStatus } from '../enum/geo-status.enum';

type TGeoPermissionStatus = GeoStatus | void;

export interface IRahmetWebApp {
    onAuthSuccess: (trackId: string) => unknown;
    onAuthDismissed: () => unknown;
    onPaySuccess: () => unknown;
    onNativePayViewClosed: () => unknown;
    onGeoPermissionStatusDefined: () => TGeoPermissionStatus;
    didBecomeActive: () => unknown;
    onBackPressed: () => unknown;
}
