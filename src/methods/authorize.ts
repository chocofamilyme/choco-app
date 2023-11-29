import { ERROR_MESSAGE, connect } from '../utils';

export const authorize = (
    clientId: string,
    type: 'code' | 'trackId',
    redirectUri: string = window.location.href,
    state = ''
): Promise<string | undefined> => {
    return connect<string | undefined>((resolve: (id: string | undefined) => string | undefined) => {
        if (type === 'code') {
            if (!window.RahmetApp.authorizeV2) {
                throw new Error(ERROR_MESSAGE);
            }

            window.RahmetApp.authorizeV2(
                JSON.stringify({
                    client_id: clientId,
                    response_type: 'code',
                    redirect_uri: redirectUri,
                    state
                })
            );

            window.RahmetWebApp.onAuthSuccessV2 = (code: string) => resolve(code);
        } else {
            window.RahmetApp.authorize();
            window.RahmetWebApp.onAuthSuccess = (trackId: string) => resolve(trackId);
        }

        window.RahmetWebApp.onAuthDismissed = () => resolve(undefined);
    });
};
