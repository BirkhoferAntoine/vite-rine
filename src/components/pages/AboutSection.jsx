import React, { useRef, useEffect, useState } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import CircuitLineLosange from '../background/CircuitLineLosange.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    slideInFrom,
    slideInFromWithReverseY,
    fadeIn,
    paperFadeIn,
    slightFlyingMovementAnimation,
    filterShadowAnimation,
} from '../../helpers/animation.helper.js';
gsap.registerPlugin(ScrollTrigger);

const devMode = false; //import.meta.env.MODE

const AboutSection = () => {
    const text = [
        'Hi, my name is Antoine I am a creative Web Developer',
        'I help companies reach new heights in interactive and dynamic fields',
        'I can help build a solid back-end as well',
        'Feel free to contact me for any propositions',
    ];

    const [aboutTextIndex, setAboutTextIndex] = useState(0);
    const [aboutText, setAboutText] = useState(text[aboutTextIndex]);
    const intervalRef = useRef(null);
    const picBoxRef = useRef(null);
    const textBoxRef = useRef(null);
    const textRef = useRef(null);
    const bgPaperRef = useRef(null);
    const losangeRef = useRef(null);
    const smallBoxRef = useRef(null);

    const sxStyles = {
        pictureBox: {
            height: { xs: '15vh', md: '20vh' },
            width: { xs: '15vh', md: '20vh' },
            mt: { xs: '10vh', md: '00vh' },
            ml: { xs: '-50vw', md: '-50vw' },
        },
        textBox: {
            fontSize: '1.5em',
            rotate: '-45deg',
            zIndex: 9999,
        }
    }

    const textInterval = 3000;

    const alternateText = () => {
        setAboutTextIndex((prevIndex) => (prevIndex + 1) % text.length);
    };

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };
    const startInterval = () => {
        stopInterval();
        intervalRef.current = setInterval(() => {
            alternateText();
        }, textInterval);
    };

    useEffect(() => {
        slideInFrom(picBoxRef.current, '#about-section', 'left');
    }, []);

    /*useEffect(() => {
        slideInFrom(textBoxRef.current, '#about-section', 'right');
    }, []);*/

    useEffect(() => {
        slideInFromWithReverseY(losangeRef.current, '#about-section', 'bottom');
    }, []);

    useEffect(() => {
        slightFlyingMovementAnimation('.floating', 2);
    }, []);

    useEffect(() => {
        filterShadowAnimation('.circuit-line-losange-container');
    }, []);

    useEffect(() => {
        paperFadeIn(bgPaperRef.current, bgPaperRef.current);
    }, []);

    useEffect(() => {
        let anim;
        const scrollTrigger = ScrollTrigger.create({
            trigger: '#about-section',
            start: 'top center',
            end: 'bottom center',
            duration: 4,
            delay: 1,
            devMode,
            scrub: 1,
            toggleActions: 'play pause resume restart', //'pause',
            onEnter: () => {
                startInterval();
                //anim = slightFlyingMovementAnimation('.floating', 2); filterShadowAnimation('.circuit-line-losange-container');
                /*scaleAnimation(smallBoxRef.current, 2);*/
            },
            /*onEnterBack:    () => {
                startInterval();
                anim = slightFlyingMovementAnimation('.floating', 2);
            },
            onLeave:        () => {
                setAboutTextIndex(0);
                stopInterval();
                anim.kill();
            },*/
        });

        return () => {
            scrollTrigger.kill();
            setAboutTextIndex(0);
            stopInterval();
        };
    }, [text.length]);

    useEffect(() => {
        fadeIn(textRef.current);
        setAboutText(text[aboutTextIndex]);
    }, [aboutTextIndex]);

    return (
        <section id={'about-section'} className={''}>
            {/*<Typography variant={'h1'}>About me</Typography>*/}
            <Paper ref={bgPaperRef} className={'bg-design-container-center'}>
                <CircuitLineLosange
                    ref={losangeRef}
                    addClassName={'floating about-background-losange'}
                    width={'50vh'}
                    maxPad={'32px'}
                    maxBorder={'24px'}
                >
                    {/*<CircuitLineLosange ref={smallBoxRef} width={'55vh'} rotate={'45deg'} maxPad={'2px'} maxBorder={'2px'}/>*/}

                    <Typography
                        ref={textRef}
                        sx={sxStyles.textBox}
                        className={'about-text typography-highlight'}
                    >
                        {aboutText}
                    </Typography>
                </CircuitLineLosange>
            </Paper>
            <Container className={'about-container'}>
                <Box
                    ref={picBoxRef}
                    mt={1}
                    sx={sxStyles.pictureBox}
                    className={
                        'about-picture-box floating shadow-highlight backdrop-filter-blur'
                    }
                >
                    <img
                        className={'filter-highlight'}
                        src={'src/assets/profil-noBg.png'}
                    />
                    <Box
                        className={
                            'about-picture-box-highlight about-picture-box-highlight-losange filter-highlight shadow-highlight'
                        }
                    ></Box>
                    {/*<Box className={'about-picture-box-highlight floating about-picture-box-highlight-circle filter-highlight shadow-highlight'}></Box>
                    <Box className={'about-picture-box-highlight floating about-picture-box-highlight-circle2 filter-highlight shadow-highlight'}></Box>*/}
                </Box>
            </Container>

            {/*<Box className={'bg-design-container-center'}>
                <CircuitLine width={'96vh'} rotate={'90deg'} top={'100vh'} circleTip/>
            </Box>
            <Box className={'section-separator backdrop-filter-blur'}></Box>

            */}
        </section>
    );
};

export default AboutSection;
