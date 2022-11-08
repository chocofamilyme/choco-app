export const applicationBecomeActive = (callback: Function) => {
    RahmetWebApp.didBecomeActive = callback;
};
