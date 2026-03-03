export const openLink = (url: string) => {
    if (!window.RahmetApp.openLink) {
        return;
    }

    window.RahmetApp.openLink(JSON.stringify({ url }));
};
