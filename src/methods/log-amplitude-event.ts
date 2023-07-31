export const logAmplitudeEvent = (event: string, body: unknown) => {
    if (!window.RahmetApp.logAmplitudeEvent) {
        return false;
    }

    window.RahmetApp.logAmplitudeEvent(
        JSON.stringify({
            event,
            body
        })
    );

    return true;
};
