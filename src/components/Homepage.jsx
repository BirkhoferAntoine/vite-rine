import React, {Component} from "react";
import {GsapTrainingComponent} from "./GsapTrainingComponent.jsx";
import {Box, Button, Card, Container, Link, Paper, Typography} from "@mui/material";
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import HighlightGeometry from "../themes/HighlightGeometry.jsx";
import CircuitLine from "../themes/CircuitLine.jsx";
import CircuitLineLosange from "../themes/CircuitLineLosange.jsx";
/*import OrbText from "./OrbText.jsx";
import OrbTextTwo from "./OrbTextTwo.jsx";*/
import CallToActionButton from "./CallToActionButton.jsx";
import CircuitLineRectangle from "../themes/CircuitLineRectangle.jsx";
import SliderNavigationStepper from "./SliderNavigationStepper.jsx";


export class Homepage extends Component {
    constructor(props) {
        super(props);

    }
    render() {

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
            contactBtn: {

            },
            contactRedBtn: {
                padding: '5rem',
                borderRadius: '50%',
            },
            contactTypo: {
                color: 'var(--color-primary)',
                fontFamily: 'Beth Ellen',
                fontSize: '2rem',
                lineHeight: 1,
                fontWeight: '400',

                WebkitTextStrokeWidth: '2px',
                WebkitTextStrokeColor: 'var(--bg-color-default)',
            },
        };

        const sliderSteps           = [
            {label: 'Frizlive', target: 'src/assets/Frizlive.jpg'},
            {label: 'FrizboxAdmin', target: 'src/assets/2022Logo-FRIZZZY.png'},
            {label: 'Frizbox', target: 'src/assets/Photobooth.jpg'},
            {label: 'FrizFactory', target: 'src/assets/2022Logo-FRIZZZY.png'},
            {label: 'VideoFriz', target: 'src/assets/2022Logo-FRIZZZY.png'},
        ];
        const sliderWrapperElement  = 'work-slider-wrapper';

        return (
            <>
                <section id={'hero-section'}>
                    <Container sx={sxStyles.heroTextContainer}>
                        <Typography sx={sxStyles.typoDesign} className={'text-outline-red text-shadow'}>Design</Typography>
                        <Typography sx={sxStyles.typoDevelop} className={'text-outline-red text-shadow'}>Develop</Typography>
                        <Box className={'power-up-box'} mb={9} sx={{display:"flex", justifyContent:'center', flexDirection:'row', alignItems:'flex-end'}}>
                            <Typography sx={sxStyles.typoPower} className={'text-outline-red text-shadow'}>POWER</Typography>
                            <Typography sx={sxStyles.typoUp} className={'text-outline-dark text-shadow'}>UP</Typography>
                        </Box>
                        <Link sx={sxStyles.callToActionBtn} className={'box-highlight'} href={'mailto:birkhoferantoine@gmail.com'} underline={'none'}>
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

                <Box className={'bg-design-container-center'}>
                    <CircuitLine width={'96vh'} rotate={'90deg'} top={'27vh'} circleTip/>
                </Box>
                <Box className={'section-separator backdrop-filter-blur'}></Box>

                <section id={'about-section'}>
                    {/*<Typography variant={'h1'}>About me</Typography>*/}
                    <Paper className={'bg-design-container-center'}>
                        <CircuitLineLosange width={'55vh'} rotate={'45deg'}></CircuitLineLosange>
                    </Paper>

                    <Container className={'about-container'}>
                        <Box mt={1} className={'about-picture-box shadow-highlight backdrop-filter-blur'}>
                            <img className={'filter-highlight'} src={'src/assets/profil-noBg.png'} />
                            <Box className={'about-picture-box-highlight about-picture-box-highlight-losange filter-highlight shadow-highlight'}></Box>
                            <Box className={'about-picture-box-highlight about-picture-box-highlight-circle filter-highlight shadow-highlight'}></Box>
                            <Box className={'about-picture-box-highlight about-picture-box-highlight-circle2 filter-highlight shadow-highlight'}></Box>
                        </Box>
                        <Box className={'about-text-container text-container shadow-highlight'}>
                            <Typography sx={{fontSize:'1.8rem'}} className={'about-text typography-highlight'}>
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
                        <SliderNavigationStepper element={'.'+sliderWrapperElement} steps={sliderSteps} />
                        <CircuitLineRectangle height={'66vh'} width={'66vw'} rotate={'0deg'}></CircuitLineRectangle>
                    </Box>
                    <Container className={'work-container'}>
                        <Box className={'work-slider-container filter-highlight shadow-highlight backdrop-filter-blur'}>
                            <Box className={'work-slider'}>
                                <Box className={sliderWrapperElement+' filter-blur'}>
                                    {sliderSteps.map(element => (
                                        <img className={'slider-image'} src={element.target} key={'slider-image-'+element.label}/>
                                    ))}
                                </Box>
                            </Box>
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
                <Box className={'bg-design-container-center'}>
                    <CircuitLine width={'75vh'} rotate={'90deg'} top={'35vh'} circleTip/>
                </Box>
                <Box className={'section-separator'}></Box>

                <section id={'skill-section'}>
                    {/*<Typography variant={'h1'}>Skills</Typography>*/}
                    <Paper sx={{width: '100%', height:'70vh', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        <Box className={'bg-design-container-center'}>
                            <Paper elevation={1} className={'paper-circle shadow-highlight'}>
                                <Box className={'inner-circle shadow-highlight'}></Box>
                            </Paper>
                        </Box>
                        {/*<OrbTextTwo/>*/}
                    </Paper>
                </section>
                <Box className={'bg-design-container-center'}>
                    <CircuitLine width={'90vh'} rotate={'90deg'} top={'30vh'} circleTip/>
                </Box>
                <Box className={'section-separator'}></Box>

                <section id={'contact-section'}>
                    {/*<Typography variant={'h1'}>Contact</Typography>*/}
                    <Container className={'contact-container'}>
                        <Paper className={'contact-paper'}>
                                <Card className={'contact-box'}>
                                    <Typography sx={sxStyles.contactTypo} variant={'h4'} className={'contact-typography'}>
                                        Contact me
                                    </Typography>
                                    <Button sx={sxStyles.contactRedBtn} variant={'contained'} className={'contact-btn'} color={'warning'}></Button>
                                </Card>
                        </Paper>
                    </Container>
                </section>
            </>
        );
    }
}