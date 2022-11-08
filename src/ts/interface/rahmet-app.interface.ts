export interface IRahmetApp {
    authorize: () => void;
    pay: (deeplink: string) => void;
    backToRahmetApp: () => void;
    isLocationEnabled?: () => void;
    requestGeoPermissionStatus: () => void;
}
