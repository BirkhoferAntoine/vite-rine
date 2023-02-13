import React from 'react';
import {Box} from "@mui/material";

const sxStyles = {
    lightbulbContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    lightbulbSeparator: {
        height: '4px',
        width: '40%',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        backgroundColor: 'transparent'
    },
    lightbulbBox: {
        margin: '-1.5em',

    },
};

const LightbulbLayout = () => {
    return (
        <Box sx={sxStyles.lightbulbContainer} className={'lightbulb-layout-container'}>
            <Box sx={sxStyles.lightbulbSeparator} className={'lightbulb-separator'}></Box>
            <Box sx={sxStyles.lightbulbBox} className={'lightbulb-box'}>
                <img src={'src/assets/image.png'} />
            </Box>
            <Box sx={sxStyles.lightbulbSeparator} className={'lightbulb-separator'}></Box>
        </Box>
    );
};

export default LightbulbLayout;
