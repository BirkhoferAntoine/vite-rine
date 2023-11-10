import React from 'react';
import { Box } from '@mui/material';

const CircuitLine = (props) => {
    let { rotate, top, width, left, circleTip } = props;

    const sxStyles = {
        container: {
            rotate,
            top,
            left,
            zIndex: '5',
        },
        line: {
            width,
        },
        circle: {},
    };

    return (
        <Box sx={sxStyles.container} className={'circuit-line-container'}>
            <Box
                className={
                    'circuit-circle shadow-highlight backdrop-filter-blur'
                }
            ></Box>
            <Box
                sx={sxStyles.line}
                className={'circuit-line shadow-highlight backdrop-filter-blur'}
            ></Box>
            {circleTip && (
                <Box
                    className={
                        'circuit-circle shadow-highlight backdrop-filter-blur'
                    }
                ></Box>
            )}
        </Box>
    );
};

export default CircuitLine;
