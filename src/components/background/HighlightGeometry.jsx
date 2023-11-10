import React, { useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';

const HighlightGeometry = () => {
    const sxStyles = {
        losangeHighlight: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: '0px',
            top: 'var(--header-margin)',
            background:
                'radial-gradient(50% 50% at 50% 50%, rgba(252, 216, 28, 0.05) 0%, rgba(252, 216, 28, 0) 100%)',
        },
        triangleTall: {
            position: 'absolute',
            width: 'calc(100% / (16/9))',
            height: '100vh',
            top: 'var(--header-margin-minus)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background:
                'conic-gradient(from 136.06deg at 50% 2.59%, rgba(253, 52, 52, 0) 0deg, #978734 39.37deg, rgba(253, 52, 52, 0) 360deg)',
        },
        triangleWide: {
            position: 'absolute',
            width: '87%',
            height: 'calc(100vh - var(--header-margin))',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background:
                'conic-gradient(from 110.06deg at 50% 3.45%, rgba(253, 52, 52, 0) 0deg, #FCD81C 39.37deg, rgba(253, 52, 52, 0) 360deg)',
        },
        triangleCenter: {
            position: 'absolute',
            width: '50%',
            height: 'calc(100vh - var(--header-margin))',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background:
                'conic-gradient(from 136.06deg at 50% 2.59%, rgba(253, 52, 52, 0) 0deg, #FCD81C 39.37deg, rgba(253, 52, 52, 0) 360deg)',
            border: 'var(--color-primary) 2px solid',
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
    };

    const containerRef = useRef(null);
    const smokeRef = useRef(null);

    const filterAnimation = () => {
        gsap.to(containerRef.current, {
            filter: 'drop-shadow(0 0 160px var(--color-primary))',
            yoyo: true,
            /*repeat: -1,
                delay: -1,*/
            duration: 6,
            ease: 'none',
        });
    };

    /*const smokeAnimation = () => {
        const timeline = gsap.timeline({ repeat: -1, delay: -1 });

        timeline.to(smokeRef.current, { x: "-=100px", y: "+=100px", duration: 2 });
        timeline.to(smokeRef.current, {
            x: "-=50px",
            y: "-=50px",
            opacity: 0,
            duration: 4,
        });
        timeline.set(smokeRef.current, { x: "+=150px", y: "-=20px" });
        timeline.to(smokeRef.current, {
            x: "-=150px",
            y: "+=200px",
            opacity: 1,
            duration: 4,
        });
    }*/

    /*useEffect(() => {
        filterAnimation();
    }, []);*/
    /*useEffect(() => {
        smokeAnimation();
    }, []);*/

    return (
        <Box ref={containerRef} className={'highlight-geometry-container'}>
            {/* <Box ref={smokeRef} className={'highlight-geometry-smoke'} />*/}
            <Box
                className={'highlight-geometry-losange highlight-geometry'}
                sx={sxStyles.losangeHighlight}
            />
            <Box
                sx={sxStyles.triangleContainer}
                className={'highlight-geometry-triangleContainer'}
            >
                <Box
                    className={'highlight-geometry-triangle highlight-geometry'}
                    sx={sxStyles.triangleTall}
                />
            </Box>
            <Box
                sx={sxStyles.triangleContainer}
                className={'highlight-geometry-triangleContainer'}
            >
                <Box
                    className={'highlight-geometry-triangle highlight-geometry'}
                    sx={sxStyles.triangleWide}
                />
            </Box>
            <Box
                sx={sxStyles.triangleContainer}
                className={'highlight-geometry-triangleContainer'}
            >
                <Box
                    className={'highlight-geometry-triangle highlight-geometry'}
                    sx={sxStyles.triangleCenter}
                />
            </Box>
        </Box>
    );
};

export default HighlightGeometry;
