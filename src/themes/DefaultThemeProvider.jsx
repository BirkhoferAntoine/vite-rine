import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {CssBaseline} from "@mui/material";
import "@fontsource/inter";
import "@fontsource/jost";
import "@fontsource/ibarra-real-nova";
import "@fontsource/beth-ellen";
import "@fontsource/julius-sans-one";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FCD81C',
            dark: '#FCD81C',
        },
        background: {
            default: '#100E02',
            paper: '#100E02;\n' +
                'border-width: 1px 0px;\n' +
                'border-style: solid;\n' +
                'border-color: #FCD81C;\n', // 'transform: matrix(1, 0, 0, -1, 0, 0);'
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
    typography: {
        fontFamily: [
            'jost',
            'inter',
            'ibarra-real-nova',
            'beth-ellen',
            'julius-sans-one'
        ].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'jost';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('jost'),
          }
      `,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 64,
            '@media(minWidth:600px)': { minHeight: 120},
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
    console.log("-> theme", theme);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
                {props.children}
        </ThemeProvider>
    );
}