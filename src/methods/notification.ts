import { connect } from '../utils';
import { NotificationStatus } from '../ts/enum';

export const getNotificationStatus = (): Promise<NotificationStatus> => {
    return connect((resolve: (status: NotificationStatus) => NotificationStatus) => {
        if (typeof window.RahmetApp.getNotificationStatus === 'function') {
            window.RahmetApp.getNotificationStatus();
            window.RahmetWebApp.didGetIsNotificationStatus = (status: NotificationStatus) => resolve(status);
        } else {
            resolve(NotificationStatus.notDetermined);
        }
    });
};

export const requestNotificationStatus = (): Promise<NotificationStatus> => {
    return connect((resolve: (status: NotificationStatus) => NotificationStatus) => {
        if (typeof window.RahmetApp.requestNotificationStatus === 'function') {
            window.RahmetApp.requestNotificationStatus();
            window.RahmetWebApp.didGetIsNotificationStatus = (status: NotificationStatus) => resolve(status);
        } else {
            resolve(NotificationStatus.notDetermined);
        }
    });
};
