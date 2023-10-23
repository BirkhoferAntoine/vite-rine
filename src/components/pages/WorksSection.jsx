import React from 'react';
import {Box, Container, Paper, styled, Typography} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import CircuitLineRectangle from "../background/CircuitLineRectangle.jsx";
const WorksSection = () => {

    const sxStyles = {

    };

    const Item = styled(CircuitLineRectangle)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        '& img': {
            width:'360px',
        }
    }));

    const sliderSteps           = [
        {label: 'Frizlive', target: 'frizlive'},
        {label: 'FrizboxAdmin', target: 'frizbox-admin'},
        {label: 'Frizbox', target: 'frizbox'},
        {label: 'FrizFactory', target: 'friz-factory'},
    ];

    return (
        <section id={'work-section'}>
            {/*<Typography variant={'h1'}>Works</Typography>*/}
            <Container className={'work-container'}>
                <Box className={'bg-design-container-center'}>
                </Box>
                <Grid container spacing={2}>
                    <Grid>
                        <Item maxPad={'12px'} maxBorder={'8px'}><img src={'src/assets/Frizlive.jpg'}/></Item>
                    </Grid>
                    <Grid>
                        <Item maxPad={'12px'} maxBorder={'8px'}><img src="src/assets/mobile.png" alt=""/></Item>
                    </Grid>
                    <Grid>
                        <Item maxPad={'12px'} maxBorder={'8px'}><img src="src/assets/VIGNETTE-PHOTOBOOTH-CLASSIC-845x684-removebg-preview.png" alt=""/></Item>
                    </Grid>
                    <Grid>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
                <Box className={'work-text-container text-container shadow-highlight'}>
                    <Typography className={'work-text typography-highlight'} align={'justify'} >
                        Hi, my name is Antoine i am a creative Web Developer <br/>
                        Hi, my name is Antoine i am a creative Web Developer <br/>
                        Hi, my name is Antoine i am a creative Web Developer <br/>
                    </Typography>
                </Box>
            </Container>

        </section>

    );
};

export default WorksSection;
