export const shareText = (text: string) => {
    if (window.RahmetApp.shareText) {
        window.RahmetApp.shareText(text);
    }
};
