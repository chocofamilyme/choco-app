const backHandlersStack: Array<Function> = [];

export const whenNavigationToBack = (cb: Function) => {
    backHandlersStack.push(cb);
};

export const cancelHandlingToBack = () => {
    backHandlersStack.pop();
};

export const handleNavigationToBack = () => {
    window.RahmetWebApp.onBackPressed = function () {
        const responseToNative = backHandlersStack.length > 0;
        if (responseToNative) {
            const cb = backHandlersStack[backHandlersStack.length - 1];
            cb();
        }

        return responseToNative;
    };
};
