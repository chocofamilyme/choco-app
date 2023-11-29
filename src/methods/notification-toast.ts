import { ERROR_MESSAGE } from '../utils';

type NotifyType = 'success' | 'info' | 'warning' | 'error';

interface NotifyBody {
    type?: NotifyType;
    title?: string;
    message?: string;
}

const isNotifyBody = (value: unknown): value is NotifyBody => {
    if (value && typeof value === 'object' && 'type' in value) {
        return true;
    }

    return false;
};

const isNotifyType = (value: unknown): value is NotifyType => {
    return typeof value === 'string' && ['success', 'info', 'warning', 'error'].includes(value);
};

function toastNotify(body: NotifyBody): void;
function toastNotify(body: string, title?: string, message?: string): void;
function toastNotify(body: NotifyBody | string, title = '', message = ''): void {
    if (!window.RahmetApp.showNativeNotification) {
        throw new Error(ERROR_MESSAGE);
    }

    let type: NotifyType = 'success';
    let _title = '';
    let _message = '';

    if (isNotifyBody(body)) {
        type = body.type || 'success';
        _title = body.title || '';
        _message = body.message || '';
    } else {
        if (isNotifyType(body)) {
            type = body;
        }

        _title = title;
        _message = message;
    }

    return window.RahmetApp.showNativeNotification(
        JSON.stringify({
            type,
            title: _title,
            message: _message
        })
    );
}

export { NotifyBody, NotifyType, toastNotify };
