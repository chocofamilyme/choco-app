export const connect = <T>(callback: Function): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
        try {
            callback(resolve);
        } catch (error) {
            reject(error);
        }
    });
};
