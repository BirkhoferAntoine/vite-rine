import {Component} from "react";
import {GsapTrainingComponent} from "./GsapTrainingComponent.jsx";
import {Box, Container, Paper, Typography} from "@mui/material";
import HighlightGeometry from "../themes/HighlightGeometry.jsx";
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
            },
            typoDesign: {
                fontFamily: 'julius-sans-one',
                fontSize: '3.5em',
                lineHeight: 1,
            },
            typoDevelop: {
                fontFamily: 'jost',
                fontSize: '4em',
                lineHeight: 1,
            },
            typoPower: {
                fontFamily: 'ibarra-real-nova',
                fontSize: '6em',
                lineHeight: 1,
            },
            typoUp: {
                fontFamily: 'Beth Ellen',
                fontSize: '7em',
                lineHeight: 1,
            },
        };

        return (
            <>
                <section id={'hero-section'}>
                    <Container sx={sxStyles.heroTextContainer}>
                        <Typography sx={sxStyles.typoDesign}>Design</Typography>
                        <Typography sx={sxStyles.typoDevelop}>Develop</Typography>
                        <Typography sx={sxStyles.typoPower}>Power</Typography>
                        <Typography sx={sxStyles.typoUp}>Up</Typography>
                    </Container>
                </section>
                <section id={'about-section'}>
                    <Typography variant={'h1'}>About me</Typography>
                </section>
                <section id={'work-section'}>
                    <Typography variant={'h1'}>Works</Typography>
                </section>
                <section id={'skill-section'}>
                    <Typography variant={'h1'}>Skills</Typography>
                </section>
                <section id={'contact-section'}>
                    <Typography variant={'h1'}>Contact</Typography>
                </section>
            </>
        );
    }
}