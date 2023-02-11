import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {CssBaseline} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FCD81C',
            dark: '#FCD81C',
        },
        background: {
            default: '#100E02',
            paper: '#100E02',
            gradiant: 'radial-gradient(56.65% 57.99% at 50% 57.99%, rgba(252, 216, 28, 0.05) 18.29%, rgba(123, 106, 14, 0.05) 36.52%, rgba(16, 14, 2, 0.05) 92.42%), #100E02;\n' +
                'border-width: 1px 0px;\n' +
                'border-style: solid;\n' +
                'border-color: #FCD81C;\n' +
                'transform: matrix(1, 0, 0, -1, 0, 0);',
            gradiant2: 'radial-gradient(88.52% 90.62% at 51.49% 90.62%, rgba(252, 216, 28, 0.05) 18.29%, rgba(123, 106, 14, 0.05) 36.52%, rgba(16, 14, 2, 0.05) 92.42%), #100E02;',
        },
        text: {
            primary: '#FCD81C',
        }
    },
    /*components: {
        MuiTableHead: {
            styleOverrides: {
                root: ({ownerState, theme}) => ({
                    backgroundColor: theme.palette.primary.main
                })
            }
        }
    }*/
});

export const DefaultThemeProvider = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                {props.children}
            </CssBaseline>
        </ThemeProvider>
    );
}