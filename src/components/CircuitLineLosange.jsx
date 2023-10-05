import React, {forwardRef} from 'react';
import {Box} from "@mui/material";

const CircuitLineLosange = forwardRef((props, ref) => {

    const {rotate, top, left, width, maxPad, maxBorder, children, addClassName} = props;

    const rWidth = { md: '33vh', lg: '55vh' };

    const sxStyles = {
        container: {
            //transform: {xs: `scale(0.6) rotate(${rotate})`, md: `scale(0.7) rotate(${rotate})`, lg: `scale(1) rotate(${rotate})`},
            rotate,
            top,
            left,
            padding: maxPad,
            //filter: 'url("#turbulence")',
        },
        losangeOut: {
            width: width,
            height: width,
            padding: maxPad,
            border: 'solid 4px transparent',
        },
        losangeCenter: {
            width: '100%',
            height: '100%',
            padding: '4px',
            border: 'solid '+maxBorder+' transparent',
        },
        losangeIn: {
            width: '100%',
            height: '100%',
            padding: maxPad,
            border: 'solid '+maxBorder+' transparent',

        },
    }

    return (
        <Box ref={ref} sx={sxStyles.container}
             className={'circuit-line-losange-container circuit-line-losange filter-highlight pseudo-element-gradient shadow-highlight ' + addClassName}>
            <Box sx={sxStyles.losangeOut}
                 className={'circuit-line-losange-out circuit-line-losange filter-highlight pseudo-element-gradient'}>
                <Box sx={sxStyles.losangeCenter}
                     className={'circuit-line-losange-center circuit-line-losange pseudo-element-gradient'}>
                    {children
                        /*<Box sx={sxStyles.losangeIn}
                         className={'circuit-line-losange-in circuit-line-losange filter-highlight pseudo-element-gradient'}>

                    </Box>*/}
                </Box>
            </Box>
        </Box>
    );
});

export default CircuitLineLosange;
