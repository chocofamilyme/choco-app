export const applicationBecomeActive = (callback: Function) => {
    window.RahmetWebApp.didBecomeActive = callback;
};
