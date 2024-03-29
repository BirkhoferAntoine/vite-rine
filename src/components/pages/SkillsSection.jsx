import React, { useEffect, useRef, useState, useContext } from 'react';
import { Box, Button, Container, Paper } from '@mui/material';
import { OrbTextThree } from '../orb/OrbTextThree.jsx';
import {
    fadeIn,
    paperFadeIn,
    paperBorderFadeIn,
    fadeInFromTrigger,
    alternateOrbScaleAnimation,
} from '../../helpers/animation.helper.js';
import { SkillsContext } from '../../contexts/skills.context.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextList } from '../common/TextList.jsx';
import { backClick, startClick, skillListObject } from '../orb/orb.config.js';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
    const { orbInit, setOrbInit } = useContext(SkillsContext);
    const { skillsArray, setSkillsArray } = useContext(SkillsContext);
    const [switchView, setSwitchView] = useState(
        window.innerWidth >= 1024 ? 'both' : 'Orb'
    );
    const textBoxRef = useRef(null);
    const textRef = useRef(null);
    const bgPaperRef = useRef(null);
    const roundPaperRef = useRef(null);
    const orbRef = useRef(null);

    const sxStyles = {
        textContainer: {
            display: { xs: 'none', md: 'flex' },
            textAlign: 'left',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh',
            width: { xs: '100%', md: 'calc(50vw - 25vh - 5vw - 3vw)' },
            zIndex: 54,
            marginRight: { md: '4vw' },
        },
        bgPaper: {
            width: '100%',
            minHeight: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
        },
        canvasContainer: {
            position: 'absolute',
            marginTop: { xs: '5vh', md: '0' },
        },
        switchViewBtnContainerOrb: {
            height: '100%',
        },
        switchViewBtnContainerTree: {
            height: 'auto',
        },
    };

    const handleSkillSelection = (skillName) => {
        if (!orbInit) setOrbInit(true);

        let newWordsArray;
        if (
            skillName === backClick ||
            skillName === startClick ||
            skillName === 'Or here...'
        ) {
            newWordsArray = Object.keys(skillListObject);
        } else {
            newWordsArray = skillListObject[skillName]
                ? [backClick, ...skillListObject[skillName]]
                : null;
        }

        if (newWordsArray) {
            fadeIn(textRef.current);
            alternateOrbScaleAnimation(orbRef.current, 0, 1);
            setSkillsArray(newWordsArray);
        }
    };
    const handleOrbTextClick = (word) => {
        handleSkillSelection(word);
    };

    const handleBoxTextClick = ({ target }) => {
        handleSkillSelection(target.textContent);
    };

    const handleSwitchViewButton = ({ target }) => {
        fadeIn(bgPaperRef.current);
        document.querySelector('#skill-section').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        setSwitchView(target.textContent);
    };

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            setSwitchView('both');
        } else {
            setSwitchView('Orb');
        }
    }, []);

    useEffect(() => {
        if (switchView === 'both') {
            roundPaperRef.current.style.display = 'flex';
            textBoxRef.current.style.display = 'flex';
            textBoxRef.current.style.height = '60vh';
            orbRef.current.style.display = 'block';
            bgPaperRef.current.style.height = '70vh';
            bgPaperRef.current.style.justifyContent = 'center';
        }
        if (switchView === 'Orb') {
            fadeIn(orbRef.current, 0.5, 1.5);
            roundPaperRef.current.style.display = 'flex';
            textBoxRef.current.style.display = 'none';
            //textBoxRef.current.style.height = '60vh';
            orbRef.current.style.display = 'block';
            bgPaperRef.current.style.height = '70vh';
            bgPaperRef.current.style.justifyContent = 'center';
        }
        if (switchView === 'Tree') {
            roundPaperRef.current.style.display = 'none';
            textBoxRef.current.style.display = 'flex';
            textBoxRef.current.style.height = '100%';
            orbRef.current.style.display = 'none';
            bgPaperRef.current.style.height = '100%';
            bgPaperRef.current.style.justifyContent = 'normal';
        }
    }, [switchView]);

    /*useEffect(() => {
            const scrollTrigger = ScrollTrigger.create({
                trigger: '#skill-section',
                start: 'top',
                end: "bottom",
                duration: 4,
                delay: 1,
                devMode,
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
        fadeInFromTrigger(orbRef.current, bgPaperRef.current, 2, 1);
    }, []);

    useEffect(() => {
        fadeInFromTrigger(textBoxRef.current, bgPaperRef.current, 2.5, 1);
    }, []);

    return (
        <section id={'skill-section'}>
            {/*<Typography variant={'h1'}>Skills</Typography>*/}
            <Paper
                ref={bgPaperRef}
                className={'bg-design-container-center'}
                sx={sxStyles.bgPaper}
                onMouseLeave={() => (document.body.style.cursor = 'auto')}
            >
                {switchView !== 'both' && (
                    <Box
                        className="switch-view-btn-container"
                        sx={
                            switchView === 'Orb'
                                ? sxStyles.switchViewBtnContainerOrb
                                : sxStyles.switchViewBtnContainerTree
                        }
                    >
                        <Button onClick={handleSwitchViewButton}>Orb</Button>
                        <Button onClick={handleSwitchViewButton}>Tree</Button>
                    </Box>
                )}
                <Paper
                    ref={roundPaperRef}
                    elevation={1}
                    className={'paper-circle shadow-highlight perspective'}
                >
                    <Box className={'inner-circle shadow-highlight'}></Box>
                </Paper>
                <Box
                    className={'skills-canvas-container'}
                    sx={sxStyles.canvasContainer}
                >
                    <OrbTextThree
                        ref={orbRef}
                        handleOrbTextClick={handleOrbTextClick}
                    />
                </Box>
                <Container
                    className={'skill-container'}
                    sx={{
                        justifyContent: 'flex-end',
                        maxWidth: { md: '100vw' },
                    }}
                >
                    <Box
                        ref={textBoxRef}
                        className={'skill-text-container'}
                        sx={sxStyles.textContainer}
                    >
                        {skillsArray && (
                            <TextList
                                ref={textRef}
                                textArray={
                                    orbInit ? skillsArray : ['Or here...']
                                }
                                backClick={backClick}
                                onClick={handleBoxTextClick}
                            />
                        )}
                    </Box>
                </Container>
            </Paper>
        </section>
    );
};

export default SkillsSection;
