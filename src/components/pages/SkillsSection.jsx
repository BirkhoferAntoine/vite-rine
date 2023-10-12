import React, {useEffect, useRef, useState, useContext} from 'react';
import {Box, Container, Paper, Typography} from "@mui/material";
import {OrbTextThree} from "../orb/OrbTextThree.jsx";
import {
    alternateTextAnimation,
    filterShadowAnimation,
    paperFadeIn,
    paperBorderFadeIn,
    fadeIn
} from "../common/GSAPFunctions.jsx";
import { SkillsContext } from "../../context/skills.context.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const skillListObject = {
    'Front-End': [
        'JavaScript ES6+ Syntax',
        'Dynamic animations with GSAP',
        '3D with Three.js',
        'Augmented reality with AR.js',
        'Homemade sliders and swipers',
        'Interactivity with canvas and fiber.js',
        'Asynchronous (fetch/axios & promises) handling',
        'Dynamic data and error handling',
        'Custom Maps with leaflet or mapbox',
        'DOM manipulations',
        'Object Oriented Programming',
        'JQuery',
    ],
    'React': [
        'Implementation within a Symfony or Laravel application',
        'Next.js framework',
        'Hooks and custom hooks',
        'Material Design UI & react @mui/material',
        'Theme handling',
        'Context',
        'Custom Form validation and filtering',
        '3D with react-three-fiber',
    ],
    'Back-End': [
        'Images and multimedia handling',
        'Security and validation',
        'Custom form validations and filtering',
        'Object Oriented Programming',
        'MVC structure',
        'Secure User handling',
        'PHP 8 or Node.js',
        'PHP Framework: Symfony',
        'MERN Stack',
    ],
    'Tools': [
        'Docker',
        'Git',
        'PHPStorm & WebStorm',
        'Jira',
        'Toggl Track',
        'Redmine Ticketing system',
        'Notion',
        'Moon Modeler',
        'Postman',
    ],
    'Database': [
        'MySQL',
        'PostgreSQL',
        'PDO',
        'MangoDB',
    ],
    'Frameworks': [
        'React.js',
        'Next.js',
        'Symfony',
        'Material Design UI & react @mui/material',
    ],
    'Operating Systems': [
        'Windows',
        'Linux',
        'MacOSX',
    ],
    'Design': [
        'Figma',
        'Photoshop',
        'AdobeXD',
        'Krita',
    ],
    'Multimedia': [
        'Audio Recording/Mixing/PostProduction with Cubase or Presonus Studio One',
        'Sound Design with Omnisphere',
        'Dynamic rendering of Audio/Video files from the server with FFMPEG',
    ],
    'CSS': [
        'Flexbox',
        'Display and Positions',
        'Transforms',
        'MediaQueries',
        'Responsive Design',
        'Shapes',
        'Animations',
        'Grid',
    ],
    'HTML': [
        'Semantic tags and best practices',
        'Form validations',
        'Accessibility and SEO basics'
    ],
};


const SkillsSection = () => {

    console.log("=>(SkillsSection.jsx:113) SkillsContext", SkillsContext);

    const {wordsArray, setWordsArray}   = useContext(SkillsContext);
    const {aboutText, setAboutText}     = useContext(SkillsContext);
    const textBoxRef        = useRef(null);
    const textRef           = useRef(null);
    const bgPaperRef        = useRef(null);
    const roundPaperRef     = useRef(null);
    const orbRef            = useRef(null);

    const handleOrbTextClick = (word) => {
        alternateTextAnimation(textRef.current);
        setAboutText('- '+skillListObject[word].join('\n- '))
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
                <OrbTextThree ref={orbRef} handleOrbTextClick={handleOrbTextClick}/>
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
