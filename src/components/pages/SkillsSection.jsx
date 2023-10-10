import React, {useEffect, useRef, useState} from 'react';
import {Box, Container, Paper, Typography} from "@mui/material";
import OrbTextThree from "../OrbTextThree.jsx";
import {alternateTextAnimation, filterShadowAnimation, paperFadeIn} from "../GSAPFunctions.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const text = [
    'Click on each of my skills to learn more'
];

const skillListObject = {
    'Front-End': [
        'JavaScript ES6+ Syntax',
        'Dynamic animations with GSAP',
        '3D with Three.js',
        'Augmented reality with AR.js',
        'Handmade sliders and swipers',
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

const skillList = [
    'JavaScript',
    'Php',
    'Tools',
    'Database',
    'Frameworks',
    'HTML',
    'CSS',
    'Operating Systems',
    'Design',
    '3D',
    'Audio/Video',
    'React.js',
    'Symfony',
];

const javascript = [
    'ES6+ Syntax',
    'Frameworks: React.js and Next.js',
    'Dynamic animations with GSAP',
    '3D with Three.js',
    'Augmented reality with AR.js',
    'Handmade sliders and swipers',
    'Interactivity with canvas and fiber.js',
    'Asynchronous (fetch/axios & promises) handling',
    'Dynamic data and error handling',
    'Custom Maps with leaflet or mapbox',
    'DOM manipulations',
    'Object Oriented Programming',
    'JQuery',
];


const tools = [
    'Docker',
    'Git',
    'PHPStorm & WebStorm',
    'Jira',
    'Toggl Track',
    'Redmine',
    'Notion',
];

const frameworks = [
    'React.js',
    'Next.js',
    'Symfony',
    'Laravel',
    'Material Design UI & react @mui/material',
]

const react = [
    'Implementation within a Symfony or Laravel application',
    'Next.js framework',
    'Hooks and custom hooks',
    'Material Design UI & react @mui/material',
    'Theme handling',
    'Context',
    'Custom Form validation and filtering',
    '3D with react-three-fiber',
];

const php = [
    'Images and audio handling',
    'Security and validation',
    'Custom form validations and filtering',
    'Object Oriented Programming',
    'MVC structure',
    'Secure User handling'
];

const ffmpeg = [
    'server-side rendering',
];

const css = [
    'Flexbox',
    'Display and Positions',
    'Transforms',
    'MediaQueries',
    'Responsive Design',
    'Shapes',
    'Animations',

];

const html = [
    'Semantic tags and best practices',
    'Form validations',
    'Accessibility and SEO basics'
];

const design = [
    'Figma',
    'Photoshop',
    'AdobeXD'

];

const SkillsSection = () => {

    const [aboutTextIndex, setAboutTextIndex]   = useState(0);
    const [aboutText, setAboutText]             = useState(text[aboutTextIndex]);
    const textBoxRef    = useRef(null);
    const textRef       = useRef(null);
    const bgPaperRef    = useRef(null);

    const handleOrbTextClick = (word) => {
        alternateTextAnimation(textRef.current);
        setAboutText('- '+skillListObject[word].join('\n- '))
    }

    useEffect(() => {
        alternateTextAnimation(textRef.current);
        setAboutText(text[aboutTextIndex]);
    }, []);

    useEffect(() => {
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
    }, []);


    useEffect(() => {
        paperFadeIn(bgPaperRef.current, bgPaperRef.current);
    }, []);

    return (
        <section id={'skill-section'}>
            {/*<Typography variant={'h1'}>Skills</Typography>*/}
            <Paper ref={bgPaperRef} className={'bg-design-container-center'} sx={{width: '100%', height:'70vh', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <Paper elevation={1} className={'paper-circle shadow-highlight'}>
                        <Box className={'inner-circle shadow-highlight'}></Box>
                    </Paper>
                <OrbTextThree skillList={Object.keys(skillListObject)} handleOrbTextClick={handleOrbTextClick}/>
            </Paper>
            <Container className={'about-container'} sx={{justifyContent: 'flex-end', maxWidth:{md: '90vw'}}}>
                <Box ref={textBoxRef} className={'about-text-container floating text-container shadow-highlight'}>
                    <Typography ref={textRef} sx={{fontSize:'1.8rem', whiteSpace: 'pre-wrap', width:'100%'}} className={'about-text typography-highlight'}>
                        {aboutText}
                    </Typography>
                </Box>
            </Container>
        </section>

    );
};

export default SkillsSection;
