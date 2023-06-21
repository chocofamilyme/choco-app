export const shareImage = (base64: string, filename: string = 'name', mime: string = 'image/png') => {
    if (window.RahmetApp.shareImage) {
        window.RahmetApp.shareImage(JSON.stringify({ base64, filename, mime }));
    }
};
