export const hapticSelection = (): void => {
    if (!window.RahmetApp.hapticSelection) {
        return;
    }

    return window.RahmetApp.hapticSelection();
};
