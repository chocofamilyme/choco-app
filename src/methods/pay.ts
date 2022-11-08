import { connect } from '../utils';

type TPaymentStatus = 'success' | 'closed';

export const pay = (deeplink: string): Promise<TPaymentStatus> => {
    return connect((resolve: (status: TPaymentStatus) => TPaymentStatus) => {
        RahmetApp.pay(deeplink);
        RahmetWebApp.onPaySuccess = () => resolve('success');
        RahmetWebApp.onNativePayViewClosed = () => resolve('closed');
    });
};
