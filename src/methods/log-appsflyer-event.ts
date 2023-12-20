export const logAppsflyerEvent = (event: string, body: unknown = {}) => {
    if (!window.RahmetApp.logAppsflyerEvent) {
        return false;
    }

    window.RahmetApp.logAppsflyerEvent(
        JSON.stringify({
            event,
            body
        })
    );

    return true;
};
