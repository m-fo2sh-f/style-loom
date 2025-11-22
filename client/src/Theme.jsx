import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    palette: {
        mode: 'light', // أو 'dark'

        primary: {
            main: '#262626',    // اللون الأساسي
            light: '#FFFFFF',   // اختياري
            dark: '#676665',    // اختياري
            contrastText: '#fff'
        },

        secondary: {
            main: '#C2B4A3',
            light: '#dad4cdff',
            dark: '#0F0F0F',
            contrastText: '#0F0F0F'
        },

        error: {
            main: '#d32f2f'
        },

        warning: {
            main: '#ed6c02'
        },

        info: {
            main: '#0288d1'
        },

        success: {
            main: '#2e7d32'
        },

        background: {
            default: '#0F0F0F',
            paper: '#fff'
        },
    },
});

export default theme;