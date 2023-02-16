import React, {Component} from "react";
import {GsapTrainingComponent} from "./GsapTrainingComponent.jsx";
import {Box, Container, Link, Paper, Typography} from "@mui/material";
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import HighlightGeometry from "../themes/HighlightGeometry.jsx";
import CircuitLine from "../themes/CircuitLine.jsx";
export class Homepage extends Component {
    render() {

        const sxStyles = {
            heroSection: {
                height: 'calc(100vh - var(--header-margin))'
            },
            heroTextContainer: {
                width: '70vw',
                height: '45vh', // 45vh
                display: 'flex',
                //justifyContent: 'center',
                flexDirection: 'column',
                filter: 'drop-shadow(0px 0px 15px #FCD81C)',
            },
            typoDesign: {
                color: '#EBEAE3',
                fontFamily: 'Julius Sans One',
                fontWeight: '400',
                fontSize: '3.8em',
                lineHeight: 1,
                textShadow: '0px 0px 15px #FCD81C',

                '-webkit-text-stroke-width': '1px',
                '-webkit-text-stroke-color': 'rgba(253, 52, 52, 0.4)',
                border: '1px solid rgba(253, 52, 52, 0.4)',
            },
            typoDevelop: {
                color: '#E0D6A3',
                fontFamily: 'Jost',
                fontSize: '4em',
                lineHeight: 1,
                fontWeight: '400',
                textShadow: '0px 0px 15px #FCD81C',

                '-webkit-text-stroke-width': '1px',
                '-webkit-text-stroke-color': 'rgba(253, 52, 52, 0.6)',
            },
            typoPower: {
                color: '#DDDDDD',
                fontFamily: 'Ibarra Real Nova',
                fontSize: '6em',
                lineHeight: 1,
                fontWeight: '600',
                textShadow: '0px 0px 15px #FCD81C',

                '-webkit-text-stroke-width': '1px',
                '-webkit-text-stroke-color': 'rgba(253, 52, 52, 0.8)',
            },
            typoUp: {
                color: '#FCD81C',
                fontFamily: 'Beth Ellen',
                fontSize: '7em',
                lineHeight: 1,
                fontWeight: '400',
                textShadow: '0px 0px 15px #FCD81C',

                '-webkit-text-stroke-width': '2px',
                '-webkit-text-stroke-color': '#100E02',
            },
            textExtra: {

            },
            heroFooterContainer: {
                display: 'flex',
                justifyContent: 'space-between',
            },
            aboutContainer: {
                display: 'flex',
                justifyContent: 'center',
            },
            aboutPhotoBox: {

            },
        };

        return (
            <>
                <section id={'hero-section'}>
                    <Container sx={sxStyles.heroTextContainer}>
                        <Typography sx={sxStyles.typoDesign} className={'text-outline-red'}>Design</Typography>
                        <Typography sx={sxStyles.typoDevelop} className={'text-outline-red'}>Develop</Typography>
                        <Typography sx={sxStyles.typoPower} className={'text-outline-red'}>POWER</Typography>
                        <Typography sx={sxStyles.typoUp} className={'text-outline-dark'}>UP</Typography>
                    </Container>
                    <Box sx={sxStyles.heroFooterContainer}>
                        <Box sx={{ml: '4em', mr:'4em'}}>
                            <LocationOnSharpIcon/>
                            <Typography sx={sxStyles.textExtra} className={'text-outline-yellow filter-highlight-yellow'}>Paris - France</Typography>
                        </Box>
                        <Box sx={{ml: '4em', mr:'4em'}}>
                            <EmailSharpIcon/>
                            <Link href={'mailto:birkhoferantoine@gmail.com'} underline={'none'}>
                                <Typography sx={sxStyles.textExtra} className={'text-outline-yellow filter-highlight-yellow'}>Send me an email</Typography>
                            </Link>
                        </Box>
                    </Box>

                </section>
                <Box className={'bg-design-container-center'}>
                    <CircuitLine width={'96vh'} rotate={'90deg'} top={'27vh'} circleTip/>
                </Box>
                <Box className={'section-separator backdrop-filter-blur'}></Box>
                <section id={'about-section'}>
                    <Container sx={sxStyles.aboutContainer}>
                        <Box height={'33vh'} mt={1} className={'about-picture-box shadow-highlight-yellow backdrop-filter-blur'}>
                            <img height={'100%'} src={'src/assets/profil.png'} />
                        </Box>
                    </Container>
                    {/*<Typography variant={'h1'}>About me</Typography>*/}
                </section>
                <Box className={'section-separator'}></Box>
                <section id={'work-section'}>
                    {/*<Typography variant={'h1'}>Works</Typography>*/}
                </section>
                <Box className={'section-separator'}></Box>
                <section id={'skill-section'}>
                    {/*<Typography variant={'h1'}>Skills</Typography>*/}
                </section>
                <Box className={'section-separator'}></Box>
                <section id={'contact-section'}>
                    {/*<Typography variant={'h1'}>Contact</Typography>*/}
                </section>
            </>
        );
    }
}