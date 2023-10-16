import React, {useEffect, useRef, useState, useContext} from 'react';
import {Box, Button, Container, Paper, Typography} from "@mui/material";
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
import {TextList} from "../common/TextList.jsx";
gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {

    const {skillListObject}                 = useContext(SkillsContext);
    const {skillsArray, setSkillsArray}     = useContext(SkillsContext);
    const [switchView, setSwitchView]    = useState('both');
    const textBoxRef        = useRef(null);
    const textRef           = useRef(null);
    const bgPaperRef        = useRef(null);
    const roundPaperRef     = useRef(null);
    const orbRef            = useRef(null);


    const sxStyles = {
        skillsTextContainer: {
            display: {xs: 'none', md:'flex'},
            textAlign: 'left',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh',
            width: {xs: '100%', md: 'calc(50vw - 25vh - 5vw - 3vw)'},
            zIndex: 54,
            marginRight: {md:'4vw'},
        },
        bgPaper :{
            width: '100%',
            minHeight: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: {xs: 'column', md:'row'}
        },
    };

    const handleSkillSelection = (skillName) => {
        let newWordsArray;
        if (skillName === '../Back') {
            newWordsArray = Object.keys(skillListObject);
        } else {
            newWordsArray = skillListObject[skillName] ? ['../Back', ...skillListObject[skillName]] : null;
        }

        if (newWordsArray) {
            alternateTextAnimation(textRef.current);
            setSkillsArray(newWordsArray);
        }
    }
    const handleOrbTextClick = (word) => {
        handleSkillSelection(word);
    }

    const handleBoxTextClick = ({target}) => {
        handleSkillSelection(target.textContent);
    }

    const handleOrbScaleAnimation = () => {
        alternateOrbScaleAnimation(orbRef, 0, 1)
    }

    const handleSwitchViewButton = ({target}) => {
        console.log("=>(SkillsSection.jsx:77) target.textContent", target.textContent);
        setSwitchView(target.textContent);
    }

    useEffect(() => {
        console.log("=>(SkillsSection.jsx:103) window", window);
        if (window.innerWidth >= 1024) {
            setSwitchView('both');
        } else {
            setSwitchView('Orb');
        }
    }, []);

    useEffect(() => {
        console.log("=>(SkillsSection.jsx:91) switchView", switchView);
        if (switchView === 'both') {
            roundPaperRef.current.style.display = 'flex';
            textBoxRef.current.style.display = 'flex';
            textBoxRef.current.style.height = '60vh';
            orbRef.current.style.display = 'block';
            bgPaperRef.current.style.height = '70vh';
            bgPaperRef.current.style.justifyContent = 'center'
        }
        if (switchView === 'Orb') {
            roundPaperRef.current.style.display = 'flex';
            textBoxRef.current.style.display = 'none';
            //textBoxRef.current.style.height = '60vh';
            orbRef.current.style.display = 'block';
            bgPaperRef.current.style.height = '70vh';
            bgPaperRef.current.style.justifyContent = 'center'
        }
        if (switchView === 'Tree') {
            roundPaperRef.current.style.display = 'none';
            textBoxRef.current.style.display = 'flex';
            textBoxRef.current.style.height = '100%';
            orbRef.current.style.display = 'none';
            bgPaperRef.current.style.height = '100%';
            bgPaperRef.current.style.justifyContent = 'normal'
        }
    }, [switchView]);


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
            <Paper ref={bgPaperRef} className={'bg-design-container-center'} sx={sxStyles.bgPaper}>
                <Box>
                    <Button onClick={handleSwitchViewButton}>Orb</Button>
                    <Button onClick={handleSwitchViewButton}>Tree</Button>
                </Box>
                <Paper ref={roundPaperRef} elevation={1} className={'paper-circle shadow-highlight perspective'}>
                    <Box className={'inner-circle shadow-highlight'}></Box>
                </Paper>
                <OrbTextThree className={'test'} ref={orbRef} handleOrbTextClick={handleOrbTextClick} handleOrbScaleAnimation={handleOrbScaleAnimation}/>
                <Container className={'skill-container'} sx={{justifyContent: 'flex-end', maxWidth:{md: '100vw'}}}>
                    <Box ref={textBoxRef} className={'skill-text-container'} sx={sxStyles.skillsTextContainer}>
                        {skillsArray && <TextList ref={textRef} textArray={skillsArray} onClick={handleBoxTextClick} />}
                    </Box>
                </Container>
            </Paper>
        </section>

    );
};

export default SkillsSection;
