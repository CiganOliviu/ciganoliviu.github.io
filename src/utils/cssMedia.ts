export const AppTheme = {
    white: '#fff',
    lightGreen: '#20c997',
    darkerClose: '#212529',
    darkerOpen: '#343a40',
    openGray: '#6c757d',
    darkCardBackground: '#111418',
    cardContentGray: '#FFFFFF80'
};

export const Breakpoints = {
    nano: '400px',
    small: '500px',
    medium: '768px',
    large: '1200px',
    xxLarge: '1920px',
    fourK: '3840px'
};

export const minWidthQuery = (breakpoint: string) => `@media screen and (min-width: ${breakpoint})`;
