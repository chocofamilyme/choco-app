export const shareFile = (base64: string, filename: string = 'name', mime: string = 'image/png') => {
    if (window.RahmetApp.loadBase64File) {
        window.RahmetApp?.loadBase64File(JSON.stringify({ base64, filename, mime }));
    }
};
