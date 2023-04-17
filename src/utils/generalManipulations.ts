import { saveAs } from 'file-saver';

export const triggerDownloadCV = () => {
    const fileUrl = 'cv.pdf';
    const fileName = 'cv.pdf';

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
