export const isLocationEnabled = (): boolean => {
    if (window.RahmetApp.isLocationEnabled) {
        return window.RahmetApp.isLocationEnabled();
    }

    return true;
};
