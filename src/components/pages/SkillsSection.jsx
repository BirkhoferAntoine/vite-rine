import React, {useEffect, useRef, useState, useContext} from 'react';
import {Box, Container, Paper, Typography} from "@mui/material";
import {OrbTextThree} from "../orb/OrbTextThree.jsx";
import {
    alternateTextAnimation,
    filterShadowAnimation,
    paperFadeIn,
    paperBorderFadeIn,
    fadeIn, alternateOrbScaleAnimation
} from "../common/GSAPFunctions.jsx";
import { SkillsContext } from "../../context/skills.context.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {

    const {skillListObject}             = useContext(SkillsContext);
    const {wordsArray, setWordsArray}   = useContext(SkillsContext);
    const {aboutText, setAboutText}     = useContext(SkillsContext);
    const textBoxRef        = useRef(null);
    const textRef           = useRef(null);
    const bgPaperRef        = useRef(null);
    const roundPaperRef     = useRef(null);
    const orbRef            = useRef(null);

    const handleOrbTextClick = (word) => {
        alternateTextAnimation(textRef.current);
        const newWordsArray = word === 'Back' ? Object.keys(skillListObject) : ['Back', ...skillListObject[word]];
        console.log("=>(SkillsSection.jsx:33) newWordsArray", newWordsArray);
        setWordsArray(newWordsArray);
        setAboutText('- '+newWordsArray.join('\n- '));
    }

    const handleOrbScaleAnimation = () => {
        alternateOrbScaleAnimation(orbRef, 0, 1)
    }

    /*useEffect(() => {
        const scrollTrigger = ScrollTrigger.create({
            trigger: '#skill-section',
            start: 'top',
            end: "bottom",
            duration: 4,
            delay: 1,
            markers: true,
            scrub: 1,
            toggleActions: 'play pause resume restart',//'pause',
            onEnter:        () => {
                filterShadowAnimation('.circuit-line-losange-container');
            },
            onEnterBack:    () => {
                filterShadowAnimation('.circuit-line-losange-container');
            },
            onLeave:        () => {

            },
        });

        return () => {
            scrollTrigger.kill();
        };
    }, []);*/


    useEffect(() => {
        paperFadeIn(bgPaperRef.current, bgPaperRef.current);
    }, []);

    useEffect(() => {
        paperBorderFadeIn(roundPaperRef.current, bgPaperRef.current, 1.5, 2);
    }, []);

    useEffect(() => {
        fadeIn(orbRef.current, bgPaperRef.current, 2, 1);
    }, []);

    useEffect(() => {
        fadeIn(textBoxRef.current, bgPaperRef.current, 2.5, 1);
    }, []);

    return (
        <section id={'skill-section'}>
            {/*<Typography variant={'h1'}>Skills</Typography>*/}
            <Paper ref={bgPaperRef} className={'bg-design-container-center'} sx={{width: '100%', height:'70vh', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <Paper ref={roundPaperRef} elevation={1} className={'paper-circle shadow-highlight perspective'}>
                        <Box className={'inner-circle shadow-highlight'}></Box>
                    </Paper>
                <OrbTextThree ref={orbRef} handleOrbTextClick={handleOrbTextClick} handleOrbScaleAnimation={handleOrbScaleAnimation}/>
            </Paper>
            <Container className={'skill-container'} sx={{justifyContent: 'flex-end', maxWidth:{md: '100vw'}}}>
                <Box ref={textBoxRef} className={'skill-text-container'}>
                    <Typography ref={textRef} sx={{fontSize:'1.5rem', whiteSpace: 'pre-wrap', width:'100%'}} className={'about-text typography-highlight'}>
                        {aboutText}
                    </Typography>
                </Box>
            </Container>
        </section>

    );
};

export default SkillsSection;
