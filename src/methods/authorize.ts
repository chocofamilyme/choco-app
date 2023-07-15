import { connect } from '../utils';

const ERROR_MESSAGE = 'NOT_SUPPORTED';

export const authorize = (clientId: string, type: 'code' | 'trackId'): Promise<string | undefined> => {
    return connect<string | undefined>((resolve: (id: string | undefined) => string | undefined) => {
        if (type === 'code') {
            if (!window.RahmetApp.authorizeV2) {
                throw new Error(ERROR_MESSAGE);
            }

            window.RahmetApp.authorizeV2({ client_id: clientId, response_type: 'code' });
            window.RahmetWebApp.onAuthSuccessV2 = (code: string) => resolve(code);
        } else {
            window.RahmetApp.authorize();
            window.RahmetWebApp.onAuthSuccess = (trackId: string) => resolve(trackId);
        }

        window.RahmetWebApp.onAuthDismissed = () => resolve(undefined);
    });
};
