import React, {Component} from "react";
import {GsapTrainingComponent} from "../GsapTrainingComponent.jsx";
import {Box, Button, Card, Container, Link, Paper, Typography} from "@mui/material";
import CircuitLine from "../CircuitLine.jsx";
import CircuitLineLosange from "../CircuitLineLosange.jsx";
/*import OrbText from "./OrbText.jsx";
import OrbTextTwo from "./OrbTextTwo.jsx";*/
import CallToActionButton from "../CallToActionButton.jsx";
import CircuitLineRectangle from "../CircuitLineRectangle.jsx";
import SliderNavigationStepper from "../SliderNavigationStepper.jsx";
import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import WorksSection from "./WorksSection.jsx";
import SkillsSection from "./SkillsSection.jsx";
import ContactSection from "./ContactSection.jsx";


export class Homepage extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <>
                <HeroSection/>
                <Box className={'bg-design-container-center'}>
                    <CircuitLine width={'96vh'} rotate={'90deg'} top={'27vh'} circleTip/>
                </Box>

                <Box className={'section-separator backdrop-filter-blur'}></Box>

                <AboutSection/>

                <Box className={'section-separator'}></Box>

                <WorksSection/>

                <Box className={'bg-design-container-center'}>
                    <CircuitLine width={'75vh'} rotate={'90deg'} top={'35vh'} circleTip/>
                </Box>
                <Box className={'section-separator'}></Box>

                <SkillsSection/>

                <Box className={'bg-design-container-center'}>
                    <CircuitLine width={'90vh'} rotate={'90deg'} top={'30vh'} circleTip/>
                </Box>
                <Box className={'section-separator'}></Box>

                <ContactSection/>
            </>
        );
    }
}