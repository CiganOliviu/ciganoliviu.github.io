import { saveAs } from 'file-saver';

export const triggerDownloadCV = () => {
    const fileUrl = 'CiganOliviuDavid-CV.pdf';
    const fileName = 'CiganOliviuDavid-CV.pdf';

    fetch(fileUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to download file');
            }

            return response.blob();
        })
        .then((blob) => {
            saveAs(blob, fileName);
        })
        .catch((error) => {
            console.error(error);
        });
};

export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const getTextSizeBasedOnBigBreakpoint = (text: string, isBigScreen: boolean): string => {
    return isBigScreen ? text : text.slice(0, 150);
}