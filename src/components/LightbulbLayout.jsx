import React from 'react';
import {Box} from "@mui/material";

const sxStyles = {
    lightbulbContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    lightbulbSeparator: {
        height: '4px',
        width: '45%',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        backgroundColor: 'transparent'
    },
    lightbulbBox: {

    },
};

const LightbulbLayout = () => {
    return (
        <Box sx={sxStyles.lightbulbContainer} className={'lightbulb-layout-container'}>
            <Box sx={sxStyles.lightbulbSeparator} className={'lightbulb-separator'}></Box>
            <Box className={'lightbulb-box'}>

            </Box>
            <Box sx={sxStyles.lightbulbSeparator} className={'lightbulb-separator'}></Box>
        </Box>
    );
};

export default LightbulbLayout;
