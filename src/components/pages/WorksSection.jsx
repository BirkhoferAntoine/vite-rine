import React from 'react';
import {Box, Container, Paper, Typography} from "@mui/material";
import SliderNavigationStepper from "../SliderNavigationStepper.jsx";
import CircuitLineRectangle from "../CircuitLineRectangle.jsx";
import SliderDemo from "../SliderDemo.jsx";

const WorksSection = () => {

    const sliderSteps           = [
        {label: 'Frizlive', target: 'frizlive'},
        {label: 'FrizboxAdmin', target: 'frizbox-admin'},
        {label: 'Frizbox', target: 'frizbox'},
        {label: 'FrizFactory', target: 'friz-factory'},
    ];

    return (
        <section id={'work-section'}>
            {/*<Typography variant={'h1'}>Works</Typography>*/}
            <Container id={'frizlive'} className={'work-container'}>
                <Box className={'bg-design-container-center'}>
                    <SliderNavigationStepper steps={sliderSteps} />
                </Box>

                <SliderDemo/>
                <Box className={'work-text-container text-container shadow-highlight'}>
                    <Typography className={'work-text typography-highlight'} align={'justify'} >
                        Hi, my name is Antoine i am a creative Web Developer <br/>
                        Hi, my name is Antoine i am a creative Web Developer <br/>
                        Hi, my name is Antoine i am a creative Web Developer <br/>
                    </Typography>
                </Box>
            </Container>

            <Container id={'frizbox-admin'} className={'work-container'}>
                <Box className={'bg-design-container-center'}>
                </Box>

                <Box className={'work-slider-container filter-highlight shadow-highlight backdrop-filter-blur'}>
                    <Box className={'work-slider'}>
                        <Box className={'work-slider-wrapper filter-blur'}>

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

            <Container id={'frizbox'} className={'work-container'}>
                <Box className={'bg-design-container-center'}>

                </Box>

                <Box className={'work-content'}>
                    <Box className={'work-content-text-container text-container shadow-highlight'}>
                        <Typography className={'work-text typography-highlight'} align={'justify'} >
                            Hi, my name is Antoine i am a creative Web Developer <br/>
                            Hi, my name is Antoine i am a creative Web Developer <br/>
                            Hi, my name is Antoine i am a creative Web Developer <br/>
                        </Typography>
                    </Box>
                        <img className={'frizbox-image'} src={'src/assets/VIGNETTE-PHOTOBOOTH-CLASSIC-845x684-removebg-preview(2).png'}/>
                </Box>
            </Container>

            <Container id={'friz-factory'} className={'work-container'}>

                <Box className={'bg-design-container-center'}>
                    <CircuitLineRectangle height={'66vh'} width={'66vw'} rotate={'0deg'}></CircuitLineRectangle>
                </Box>

                <Box sx={{width: '200vw', display:'flex', flexDirection:'row', justifyContent:'space-around'}} className={'bg-design-container-center'}>
                    <Box className={'work-slider-container filter-highlight shadow-highlight backdrop-filter-blur'}>
                        <Box className={'work-slider'}>
                            <Box className={'work-slider-wrapper filter-blur'}>

                            </Box>
                        </Box>
                    </Box><Box className={'work-slider-container filter-highlight shadow-highlight backdrop-filter-blur'}>
                        <Box className={'work-slider'}>
                            <Box className={'work-slider-wrapper filter-blur'}>

                            </Box>
                        </Box>
                    </Box><Box className={'work-slider-container filter-highlight shadow-highlight backdrop-filter-blur'}>
                        <Box className={'work-slider'}>
                            <Box className={'work-slider-wrapper filter-blur'}>

                            </Box>
                        </Box>
                    </Box>
                </Box>


            </Container>
        </section>

    );
};

export default WorksSection;
