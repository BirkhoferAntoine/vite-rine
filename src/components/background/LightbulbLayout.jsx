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
        background: 'radial-gradient(56.65% 57.99% at 50% 57.99%, rgba(252, 216, 28, 0.05) 0%, rgba(123, 106, 14, 0.05) 50%, rgba(16, 14, 2, 0.05) 100%), #100E02',
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
