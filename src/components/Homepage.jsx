import React, {Component} from "react";
import {GsapTrainingComponent} from "./GsapTrainingComponent.jsx";
import {Box, Container, Link, Paper, Typography} from "@mui/material";
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import HighlightGeometry from "../themes/HighlightGeometry.jsx";
import CircuitLine from "../themes/CircuitLine.jsx";
import CircuitLineSquare from "../themes/CircuitLineSquare.jsx";
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
            <>
                <section id={'hero-section'}>
                    <Container sx={sxStyles.heroTextContainer}>
                        <Typography sx={sxStyles.typoDesign} className={'text-outline-red text-shadow'}>Design</Typography>
                        <Typography sx={sxStyles.typoDevelop} className={'text-outline-red text-shadow'}>Develop</Typography>
                        <Typography sx={sxStyles.typoPower} className={'text-outline-red text-shadow'}>POWER</Typography>
                        <Typography sx={sxStyles.typoUp} className={'text-outline-dark text-shadow'}>UP</Typography>
                    </Container>
                    <Box className={'hero-footer-container'}>
                        <Box sx={{ml: '4em', mr:'4em'}}>
                            <LocationOnSharpIcon/>
                            <Typography sx={sxStyles.textExtra} className={'text-outline-yellow filter-highlight'}>Paris - France</Typography>
                        </Box>
                        <Box sx={{ml: '4em', mr:'4em'}}>
                            <EmailSharpIcon/>
                            <Link href={'mailto:birkhoferantoine@gmail.com'} underline={'none'}>
                                <Typography sx={sxStyles.textExtra} className={'text-outline-yellow filter-highlight'}>Send me an email</Typography>
                            </Link>
                        </Box>
                    </Box>

                </section>

                <Box className={'bg-design-container-center'}>
                    <CircuitLine width={'96vh'} rotate={'90deg'} top={'27vh'} circleTip/>
                </Box>
                <Box className={'section-separator backdrop-filter-blur'}></Box>

                <section id={'about-section'}>
                    {/*<Typography variant={'h1'}>About me</Typography>*/}
                    <Box className={'bg-design-container-center'}>
                        <CircuitLineSquare width={'55vh'} rotate={'45deg'}></CircuitLineSquare>
                    </Box>

                    <Container className={'about-container'}>
                        <Box mt={1} className={'about-picture-box shadow-highlight backdrop-filter-blur'}>
                            <img className={'filter-highlight'} src={'src/assets/profil-noBg.png'} />
                            <Box className={'about-picture-box-highlight about-picture-box-highlight-square filter-highlight shadow-highlight'}></Box>
                            <Box className={'about-picture-box-highlight about-picture-box-highlight-circle filter-highlight shadow-highlight'}></Box>
                            <Box className={'about-picture-box-highlight about-picture-box-highlight-circle2 filter-highlight shadow-highlight'}></Box>
                        </Box>
                        <Box className={'about-text-container text-container shadow-highlight'}>
                            <Typography variant={'h4'} className={'typography-highlight'}>
                                Hi, my name is Antoine i am a creative Web Developer
                            </Typography>
                        </Box>
                    </Container>

                    <Box className={'bg-design-container-center'}>
                        <CircuitLine width={'96vh'} rotate={'90deg'} top={'100vh'} circleTip/>
                    </Box>
                    <Box className={'section-separator backdrop-filter-blur'}></Box>

                </section>

                <Box className={'section-separator'}></Box>

                <section id={'work-section'}>
                    {/*<Typography variant={'h1'}>Works</Typography>*/}
                    <Box className={'bg-design-container-center'}>

                    </Box>
                    <Container className={'work-container'}>
                        <Box className={'work-slider-container filter-highlight shadow-highlight backdrop-filter-blur'}>
                            <Box className={'work-slider'}>
                                <Box className={'work-slider-wrapper filter-blur'}>
                                    <img src={'src/assets/Frizlive.jpg'} />
                                </Box>
                            </Box>
                        </Box>
                        <Box className={'work-brand-logo-container filter-highlight'}>
                            <img className={'brand-logo'} src={'src/assets/2022Logo-FRIZZZY.png'} alt={'frizzzy'}/>
                        </Box>
                        <Box className={'work-text-container text-container shadow-highlight'}>
                            <Typography className={'work-text typography-highlight'} align={'justify'} >
                                Hi, my name is Antoine i am a creative Web Developer <br/>
                                Hi, my name is Antoine i am a creative Web Developer <br/>
                                Hi, my name is Antoine i am a creative Web Developer <br/>
                            </Typography>
                        </Box>
                    </Container>
                </section>

                <Box className={'section-separator'}></Box>

                <section id={'skill-section'}>
                    {/*<Typography variant={'h1'}>Skills</Typography>*/}
                    <Box className={'bg-design-container-center'}>
                        <Box className={''}></Box>
                    </Box>
                </section>

                <Box className={'section-separator'}></Box>

                <section id={'contact-section'}>
                    {/*<Typography variant={'h1'}>Contact</Typography>*/}
                </section>
            </>
        );
    }
}