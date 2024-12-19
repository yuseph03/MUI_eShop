import { createTheme } from '@mui/material/styles';

export const rtlTheme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: 'Arial, sans-serif', 
    },
});

document.body.dir = 'rtl';