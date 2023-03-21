import React from 'react';
import {Box} from "@mui/material";

const CircuitLineLosange = (props) => {

    const {rotate, top, left, width, addClassName} = props;

    const sxStyles = {
        container: {
            rotate,
            top,
            left,
        },
        losangeOut: {
            width: width,
            height: width,
        },
        losangeCenter: {
            width: '100%',
            height: '100%',
        },
        losangeIn: {
            width: '100%',
            height: '100%',
        },
    }

    return (
        <Box sx={sxStyles.container}
             className={'circuit-line-losange-container circuit-line-losange filter-highlight pseudo-element-gradient shadow-highlight'}>
            <Box sx={sxStyles.losangeOut}
                 className={'circuit-line-losange-out circuit-line-losange filter-highlight pseudo-element-gradient'}>
                <Box sx={sxStyles.losangeCenter}
                     className={'circuit-line-losange-center circuit-line-losange pseudo-element-gradient'}>
                    {/*<Box sx={sxStyles.losangeIn}
                         className={'circuit-line-losange-in circuit-line-losange filter-highlight pseudo-element-gradient'}>

                    </Box>*/}
                </Box>
            </Box>
        </Box>
    );
};

export default CircuitLineLosange;
