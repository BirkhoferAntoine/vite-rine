import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import '@fontsource/inter';
import '@fontsource/jost';
import '@fontsource/ibarra-real-nova';
import '@fontsource/beth-ellen';
import '@fontsource/julius-sans-one';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FCD81C',
            dark: '#FCD81C',
            black: '#100E02',
            yellowGrad:
                'linear-gradient(180deg, rgba(252, 215, 28, 0.2) 0%, rgba(252, 215, 28, 0) 100%),linear-gradient(180deg, rgba(248, 122, 0, 0) 0%, rgba(248, 122, 0, 0.6) 100%)',
            redOrangeGrad:
                'linear-gradient(180deg, rgba(252, 216, 28, 0.2) 0%, rgba(252, 216, 28, 0) 37.5%), linear-gradient(180deg, rgba(248, 0, 0, 0) 0%, rgba(248, 0, 0, 0.6) 99.99%, rgba(248, 0, 0, 0.6) 100%),#F87A00',
        },
        secondary: {
            main: '#FF9F00',
            dark: '#FF9F00',
            orangeRed: '#E53D00',
            redCarnelian: '#BA1B1D',
        },
        warning: {
            main: '#E53D00',
            dark: '#E53D00',
        },
        error: {
            main: '#BA1B1D',
            dark: '#BA1B1D',
        },
        background: {
            default: '#100E02',
            paper:
                '#100E02;\n' +
                'border-width: 1px 0px;\n' +
                'border-style: solid;\n' +
                'border-color: #FCD81C;\n', // 'transform: matrix(1, 0, 0, -1, 0, 0);'
            gradiant:
                'radial-gradient(56.65% 57.99% at 50% 57.99%, rgba(252, 216, 28, 0.05) 18.29%, rgba(123, 106, 14, 0.05) 36.52%, rgba(16, 14, 2, 0.05) 92.42%), #100E02;\n' +
                'border-width: 1px 0px;\n' +
                'border-style: solid;\n' +
                'border-color: #FCD81C;\n' +
                'transform: matrix(1, 0, 0, -1, 0, 0);',
            gradiant2:
                'radial-gradient(88.52% 90.62% at 51.49% 90.62%, rgba(252, 216, 28, 0.05) 18.29%, rgba(123, 106, 14, 0.05) 36.52%, rgba(16, 14, 2, 0.05) 92.42%), #100E02;',
            yellowRadial:
                'radial-gradient(56.65% 57.99% at 50% 57.99%, rgba(252, 216, 28, 0.05) 0%, rgba(123, 106, 14, 0.05) 50%, rgba(16, 14, 2, 0.05) 100%), bg-color-default)',
            yellowRadial2:
                'radial-gradient(88.52% 90.62% at 51.49% 90.62%, rgba(252, 216, 28, 0.05) 18.29%, rgba(245, 210, 28, 0.05) 18.3%, rgba(123, 106, 14, 0.05) 36.52%, rgba(16, 14, 2, 0.05) 92.42%),bg-color-default)',
            yellowRadialHighlighted:
                'radial-gradient(56.65% 57.99% at 50% 57.99%, rgba(252, 216, 28, 0.15) 0%, rgba(123, 106, 14, 0.15) 50%, rgba(16, 14, 2, 0.15) 100%),#100E02',
            highlightRadial:
                'radial-gradient(63.13% 50% at 50% 50%, #FCD81C 0%, rgba(252, 218, 38, 0) 100%)',
            yellowGrad:
                'linear-gradient(180deg, rgba(252, 215, 28, 0.2) 0%, rgba(252, 215, 28, 0) 100%),linear-gradient(180deg, rgba(248, 122, 0, 0) 0%, rgba(248, 122, 0, 0.6) 100%)',
            redOrangeGrad:
                'linear-gradient(180deg, rgba(252, 216, 28, 0.2) 0%, rgba(252, 216, 28, 0) 37.5%), linear-gradient(180deg, rgba(248, 0, 0, 0) 0%, rgba(248, 0, 0, 0.6) 99.99%, rgba(248, 0, 0, 0.6) 100%),#F87A00',
        },
        text: {
            primary: '#FCD81C',
            secondary: '#E53D00',
            orangePeel: '#FF9F00',
            redCarnelian: '#BA1B1D',
            black: '#100E02',
            yellowGrad:
                'linear-gradient(180deg, rgba(252, 215, 28, 0.2) 0%, rgba(252, 215, 28, 0) 100%),linear-gradient(180deg, rgba(248, 122, 0, 0) 0%, rgba(248, 122, 0, 0.6) 100%)',
            redOrangeGrad:
                'linear-gradient(180deg, rgba(252, 216, 28, 0.2) 0%, rgba(252, 216, 28, 0) 37.5%), linear-gradient(180deg, rgba(248, 0, 0, 0) 0%, rgba(248, 0, 0, 0.6) 99.99%, rgba(248, 0, 0, 0.6) 100%),#F87A00',
        },
    },
    typography: {
        fontFamily: [
            'jost',
            'inter',
            'ibarra-real-nova',
            'beth-ellen',
            'julius-sans-one',
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
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: 'flex',
                },
            },
        },
        MuiStepLabel: {
            styleOverrides: {
                labelContainer: {
                    color: '#989C94',
                },
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 100,
            '@media(minWidth:600px)': { minHeight: 120 },
        },
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
    console.log('-> theme', theme);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    );
};
