import {Box, Container, Link, Typography} from "@mui/material";
import React, {useEffect, useRef} from "react";
import FastEffectString from "../FastEffectString.jsx";
import gsap from 'gsap';

const HeroSection = () => {

    const sxStyles = {
        callToActionBtn: {
            position: 'relative',
            zIndex: 9999,
            background: 'linear-gradient(45deg,  var(--color-secondary) 30%,var(--color-primary) 90%)',
            borderRadius: 5,
            /*border: '2px solid var(--color-primary)',*/
            color: 'white',//'#FCD81C',
            height: 48,
            width: 360,
            padding: '0 30px',
            boxShadow: '0 2px 4px 2px var(--bg-color-default)',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',

            opacity: 0,
        },
        heroSection: {
            height: 'calc(100vh - var(--header-margin))'
        },
        heroTextContainer: {
            width: '70vw',
            height: '45vh', // 45vh
            display: 'flex',
            //justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            filter: 'drop-shadow(0px 0px 15px var(--color-primary)',
        },
        typoDesign: {
            color: '#EBEAE3',
            fontFamily: 'Julius Sans One',
            fontWeight: '400',
            fontSize: '3.8em',
            lineHeight: 1,

            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'rgba(253, 52, 52, 0.4)',
            border: '1px solid rgba(253, 52, 52, 0.4)',
        },
        typoDevelop: {
            color: '#E0D6A3',
            fontFamily: 'Jost',
            fontSize: '4em',
            lineHeight: 1,
            fontWeight: '400',

            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'rgba(253, 52, 52, 0.6)',
        },
        typoPower: {
            color: '#DDDDDD',
            fontFamily: 'Ibarra Real Nova',
            fontSize: '6em',
            lineHeight: 1,
            fontWeight: '600',

            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'rgba(253, 52, 52, 0.8)',
        },
        typoUp: {
            color: 'var(--color-primary)',
            fontFamily: 'Beth Ellen',
            fontSize: '7em',
            lineHeight: 1,
            fontWeight: '400',

            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: 'var(--bg-color-default)',

            opacity: 0,
        },
    };

    const typoUpRef         = useRef(null);
    const callToActionRef   = useRef(null);

    const onLoad = () => {
        const timeline = gsap.timeline({})
            .fromTo('.animated-typo',
                {
                    opacity: 0,
                    x: -200,
                },
                {
                    opacity: 1,
                    x:0,
                    stagger: 0.33,
                    delay: 0.6,
                },
            ).fromTo(typoUpRef.current,
                {
                    opacity: 0,
                    filter: "drop-shadow(0 0 600px var(--color-primary)) drop-shadow(0 0 1600px #fff)",
                    ease: 'elastic',
                    y: 600,
                },
            {
                    opacity: 1,
                    filter: "drop-shadow(0 0 60px var(--color-primary)) drop-shadow(0 0 160px #fff)",
                    ease: 'none',
                    y: 0,
                    delay: 0.9,
                },
            ).to(typoUpRef.current,
            {
                filter: "drop-shadow(0 0 6px var(--color-primary))",
                ease: 'none',
            },

        ).fromTo(callToActionRef.current,
            {
                scrollTrigger: {
                    trigger: '#hero-section',
                    start: 'top center',
                    end: "bottom center",
                    delay: 1,
                    markers: true,
                    toggleActions: 'restart pause reverse pause',//'pause',
                },
                opacity: 0,
                filter: "drop-shadow(0 0 600px var(--color-primary)) drop-shadow(0 0 1600px var(--color-secondary))",
                ease: 'back',
                duration: 2,
                /*filter: "drop-shadow(0 0 6px var(--color-primary)) drop-shadow(0 0 0px var(--color-secondary))",*/
            },
            {
                scrollTrigger: {
                    trigger: '#hero-section',
                    start: 'top center',
                    end: "bottom center",
                    delay: 1,
                    markers: true,
                    toggleActions: 'play pause play resume',//'pause',
                },
                opacity: 1,
                filter: "drop-shadow(0 0 60px var(--color-primary)) drop-shadow(0 0 160px var(--color-secondary))",
                ease: 'back',
                /*filter: "drop-shadow(0 0 60px var(--color-primary)) drop-shadow(0 0 160px var(--color-secondary))",*/
                delay: 0.3,
                duration: 2,
                yoyo: true,
                repeat: -1,
            },
        )/*.fromTo(callToActionRef.current,
            {
                filter: "drop-shadow(0 0 160px var(--color-primary)) drop-shadow(0 0 20px var(--color-secondary)) ",
                ease: 'none',
                duration: 4,
                /!*delay: -1,*!/
            },
            {
                filter: "drop-shadow(0 0 20px var(--color-primary)) drop-shadow(0 0 60px var(--color-secondary)) ",
                /!*delay: -1,*!/
                yoyo: true,
                ease: 'none',
                yoyoEase: 'none',
                duration: 4,
                repeat: -1,
            },
        )*/;
    }

    useEffect(() => {
        onLoad();
    }, []);

    return (
        <section id={'hero-section'}>
            <Container sx={sxStyles.heroTextContainer}>

                <FastEffectString delay={1000} text={'Design'} extraClass={'animated-typo-1 animated-typo'} sxStyles={sxStyles.typoDesign}/>
                <FastEffectString delay={2000} text={'Develop'} extraClass={'animated-typo-2 animated-typo'} sxStyles={sxStyles.typoDevelop}/>
                <Box className={'power-up-box'} mb={9} sx={{display:"flex", justifyContent:'center', flexDirection:'row', alignItems:'flex-end'}}>
                    <FastEffectString delay={2700} text={'POWER'} extraClass={'animated-typo-3 animated-typo'} duration={300} sxStyles={sxStyles.typoPower}/>
                    {/*<FastEffectString delay={3300} text={'UP'} extraClass={'animated-typo-4 animated-typo'} duration={100} sxStyles={sxStyles.typoUp}/>*/}
                    <Typography ref={typoUpRef} sx={sxStyles.typoUp} className={'text-outline-dark text-shadow animated-typo-4 '}>UP</Typography>
                </Box>
                <Link ref={callToActionRef} className={'call-to-action-btn box-highlight'} href={'mailto:birkhoferantoine@gmail.com'} underline={'none'}>
                    <Typography sx={{fontSize: '20pt', fontWeight: 'bold'}}>Contact me</Typography>
                </Link>
            </Container>


        </section>
    );
};

{/*<Typography sx={sxStyles.typoDesign} className={'text-outline-red text-shadow'}>Design</Typography>
                <Typography sx={sxStyles.typoDevelop} className={'text-outline-red text-shadow'}>Develop</Typography>
                <Box className={'power-up-box'} mb={9} sx={{display:"flex", justifyContent:'center', flexDirection:'row', alignItems:'flex-end'}}>
                    <Typography sx={sxStyles.typoPower} className={'text-outline-red text-shadow'}>POWER</Typography>
                    <Typography sx={sxStyles.typoUp} className={'text-outline-dark text-shadow'}>UP</Typography>
</Box>*/}

{/*<Box className={'hero-footer-container'}>
                        <Box sx={{ml: '4em', mr:'4em'}}>
                            <LocationOnSharpIcon/>
                            <Typography className={'text-outline-yellow filter-highlight'}>Paris - France</Typography>
                        </Box>
                        <Box sx={{ml: '4em', mr:'4em'}}>
                            <EmailSharpIcon/>
                            <Link href={'mailto:birkhoferantoine@gmail.com'} underline={'none'}>
                                <Typography className={'text-outline-yellow filter-highlight'}>Send me an email</Typography>
                            </Link>
                        </Box>
                    </Box>*/}

export default HeroSection;