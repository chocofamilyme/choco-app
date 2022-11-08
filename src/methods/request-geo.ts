import { connect } from '../utils';
import { GeoStatus } from '../ts/enum/geo-status.enum';

export const requestGeoPermissionStatus = (): Promise<GeoStatus> => {
    return connect((resolve: (status: GeoStatus) => GeoStatus) => {
        RahmetApp.requestGeoPermissionStatus();
        RahmetWebApp.onGeoPermissionStatusDefined = (status: GeoStatus) => resolve(status);
    });
};
