import { connect } from '../utils';

interface IRefferalCode {
    code: string;
    activations_count: number;
    completed_count: number;
}

export const getRefferalCode = () => {
    return connect<IRefferalCode>((resolve: (code: IRefferalCode) => IRefferalCode) => {
        window.RahmetApp.getReferralCode();
        window.RahmetWebApp.didGetReferralCode = code => resolve(JSON.parse(code));
    });
};
