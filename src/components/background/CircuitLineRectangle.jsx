import React from 'react';
import {Box} from "@mui/material";

const CircuitLineRectangle = (props) => {

    const {rotate, top, left, width, height, addClassName} = props;

    const sxStyles = {
        container: {
            rotate,
            top,
            left,
            height: height,
            width: width,
        },
        verticalLine: {
            height: height,
            width: '4px',
        },
        horizontalLine: {
            width: width,
            height: '4px',
        },
        middleContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
        }
    }

    return (
        <Box sx={sxStyles.container} className={'circuit-line-rectangle-container'}>
            <Box sx={sxStyles.horizontalLine} className={'circuit-line shadow-highlight backdrop-filter-blur'}></Box>
            <Box sx={sxStyles.middleContainer} className={'circuit-line-rectangle-container'}>
                <Box sx={sxStyles.verticalLine} className={'circuit-line-vertical shadow-highlight backdrop-filter-blur'}></Box>
                <Box sx={sxStyles.verticalLine} className={'circuit-line-vertical shadow-highlight backdrop-filter-blur'}></Box>
            </Box>
            <Box sx={sxStyles.horizontalLine} className={'circuit-line shadow-highlight backdrop-filter-blur'}></Box>
        </Box>
    );
};

export default CircuitLineRectangle;
