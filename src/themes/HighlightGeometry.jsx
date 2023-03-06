import React from 'react';
import {Box} from "@mui/material";

const sxStyles = {
    squareHighlight: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: '0px',
        top: 'var(--header-margin)',
        background: 'radial-gradient(50% 50% at 50% 50%, rgba(252, 216, 28, 0.05) 0%, rgba(252, 216, 28, 0) 100%)',
    },
    triangleTall: {
        position: 'absolute',
        width: 'calc(100% / (16/9))',
        height: '100vh',
        top: 'var(--header-margin-minus)',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        background: 'conic-gradient(from 136.06deg at 50% 2.59%, rgba(253, 52, 52, 0) 0deg, #978734 39.37deg, rgba(253, 52, 52, 0) 360deg)',
    },
    triangleWide: {
        position: 'absolute',
        width: '87%',
        height: 'calc(100vh - var(--header-margin))',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        background: 'conic-gradient(from 110.06deg at 50% 3.45%, rgba(253, 52, 52, 0) 0deg, #FCD81C 39.37deg, rgba(253, 52, 52, 0) 360deg)',
    },
    triangleCenter: {
        position: 'absolute',
        width: '50%',
        height: 'calc(100vh - var(--header-margin))',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        background: 'conic-gradient(from 136.06deg at 50% 2.59%, rgba(253, 52, 52, 0) 0deg, #FCD81C 39.37deg, rgba(253, 52, 52, 0) 360deg)',

    },
    triangleContainer: {
        position: 'relative',
        width: '100%',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        opacity: '0.05',
        filter: 'blur(25px)',
    },

}

const HighlightGeometry = () => {

    return (
        <Box className={'highlight-geometry-container'}>
            <Box className={'highlight-geometry-square highlight-geometry'} sx={sxStyles.squareHighlight}/>
            <Box sx={sxStyles.triangleContainer} className={'highlight-geometry-triangleContainer'}>
                <Box className={'highlight-geometry-triangle highlight-geometry'} sx={sxStyles.triangleTall}/>
            </Box>
            <Box sx={sxStyles.triangleContainer} className={'highlight-geometry-triangleContainer'}>
                <Box className={'highlight-geometry-triangle highlight-geometry'} sx={sxStyles.triangleWide}/>
            </Box>
            <Box sx={sxStyles.triangleContainer} className={'highlight-geometry-triangleContainer'}>
                <Box className={'highlight-geometry-triangle highlight-geometry'} sx={sxStyles.triangleCenter}/>
            </Box>
        </Box>
    );
};

export default HighlightGeometry;
