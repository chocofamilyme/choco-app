import { connect } from '../utils';

type TTrackId = string | undefined;

export const authorize = (): Promise<TTrackId> => {
    return connect<TTrackId>((resolve: (id: TTrackId) => TTrackId) => {
        window.RahmetApp.authorize();
        window.RahmetWebApp.onAuthSuccess = (trackId: string) => resolve(trackId);
        window.RahmetWebApp.onAuthDismissed = () => resolve(undefined);
    });
};
