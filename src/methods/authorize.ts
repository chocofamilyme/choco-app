import { connect } from '../utils';

type TTrackId = string | undefined;

export const authorize = (): Promise<TTrackId> => {
    return connect<TTrackId>((resolve: (id: TTrackId) => TTrackId) => {
        RahmetApp.authorize();
        RahmetWebApp.onAuthSuccess = trackId => resolve(trackId);
        RahmetWebApp.onAuthDismissed = () => resolve(undefined);
    });
};
