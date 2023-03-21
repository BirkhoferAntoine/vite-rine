import React from 'react';
import {Box, Container, Paper, Typography} from "@mui/material";
import CircuitLineLosange from "../CircuitLineLosange.jsx";
import CircuitLine from "../CircuitLine.jsx";

const AboutSection = () => {
    return (
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

    );
};

export default AboutSection;
