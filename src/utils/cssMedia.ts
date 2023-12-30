export const AppTheme = {
    white: '#fff',
    lightGreen: '#20c997',
    darkerClose: '#212529',
    darkerOpen: '#343a40',
    openGray: '#6c757d',
    darkCardBackground: '#111418',
    cardContentGray: '#ffffff80',
    scrollToTopColor: '#333',
};

export const Breakpoints = {
    nano: '400px',
    small: '500px',
    medium: '768px',
    large: '1200px',
    xxLarge: '1920px',
    fourK: '3840px'
};

export const SCREEN_SIZES = {
    desktop: 1200,
    tablet: 768,
    mobile: 400
};

export const minWidthQuery = (breakpoint: string) => `@media screen and (min-width: ${breakpoint})`;

export const getGeneralButtonStyle = () => {
    return `
        background: transparent;
        border: solid ${AppTheme.lightGreen};
        border-radius: 2rem;
        padding: 0.8rem 1.8rem 0.8rem 1.8rem; 
        text-align: center; 
        text-decoration: none;
        display: inline-block;
        font-size: 1.1rem;
        margin-top: 2rem;
        cursor: pointer;
        transition: 0.5s ease;
        font-weight: bold;
        font-family: 'Ubuntu', sans-serif;
    
        :hover {
            background: ${AppTheme.lightGreen};
            color: ${AppTheme.white};
        }
    `;
}