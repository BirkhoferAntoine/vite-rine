import React from 'react';
import {Box} from "@mui/material";

const CircuitLineSquare = (props) => {

    const {rotate, top, left, width, addClassName} = props;

    const sxStyles = {
        container: {
            rotate,
            top,
            left,
        },
        squareOut: {
            width: width,
            height: width,
        },
        squareCenter: {
            width: '100%',
            height: '100%',
        },
        squareIn: {
            width: '100%',
            height: '100%',
        },
    }

    return (
        <Box sx={sxStyles.container}
             className={'circuit-line-square-container circuit-line-square filter-highlight pseudo-element-gradient shadow-highlight'}>
            <Box sx={sxStyles.squareOut}
                 className={'circuit-line-square-out circuit-line-square filter-highlight pseudo-element-gradient'}>
                <Box sx={sxStyles.squareCenter}
                     className={'circuit-line-square-center circuit-line-square pseudo-element-gradient'}>
                    {/*<Box sx={sxStyles.squareIn}
                         className={'circuit-line-square-in circuit-line-square filter-highlight pseudo-element-gradient'}>

                    </Box>*/}
                </Box>
            </Box>
        </Box>
    );
};

export default CircuitLineSquare;
