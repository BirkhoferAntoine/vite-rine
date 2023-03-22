import {Box, Container, Link, Typography} from "@mui/material";
import React from "react";

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
        },
    };

    return (
        <section id={'hero-section'}>
            <Container sx={sxStyles.heroTextContainer}>
                <Typography sx={sxStyles.typoDesign} className={'text-outline-red text-shadow'}>Design</Typography>
                <Typography sx={sxStyles.typoDevelop} className={'text-outline-red text-shadow'}>Develop</Typography>
                <Box className={'power-up-box'} mb={9} sx={{display:"flex", justifyContent:'center', flexDirection:'row', alignItems:'flex-end'}}>
                    <Typography sx={sxStyles.typoPower} className={'text-outline-red text-shadow'}>POWER</Typography>
                    <Typography sx={sxStyles.typoUp} className={'text-outline-dark text-shadow'}>UP</Typography>
                </Box>
                <Link className={'call-to-action-btn box-highlight'} href={'mailto:birkhoferantoine@gmail.com'} underline={'none'}>
                    <Typography sx={{fontSize: '20pt', fontWeight: 'bold',}}>Contact me</Typography>
                </Link>
            </Container>
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

        </section>
    );
};

export default HeroSection;