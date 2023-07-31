import { connect } from '../utils';

export const isCameraPermissionEnabled = () => {
    return connect((resolve: (status: boolean) => boolean) => {
        if (!window.RahmetApp.isCameraPermissionEnabled) {
            return resolve(false);
        }

        window.RahmetApp.isCameraPermissionEnabled();
        window.RahmetWebApp.onCameraPermissionStatusDefined = status => resolve(status);
    });
};
