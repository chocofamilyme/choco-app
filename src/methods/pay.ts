import { connect } from '../utils';

type TPaymentStatus = 'success' | 'closed';

export const pay = (deeplink: string): Promise<TPaymentStatus> => {
    return connect((resolve: (status: TPaymentStatus) => TPaymentStatus) => {
        window.RahmetApp.pay(deeplink);
        window.RahmetWebApp.onPaySuccess = () => resolve('success');
        window.RahmetWebApp.onNativePayViewClosed = () => resolve('closed');
    });
};
