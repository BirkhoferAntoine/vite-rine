import React, {useEffect, useRef} from 'react';
import {Box, Paper, Typography, useTheme} from "@mui/material";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import AnimatedText from "./AnimatedText.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
/*ScrollTrigger.defaults({
    toggleActions: 'restart pause reverse pause',
    markers: true,
});*/

/*componentDidMount() {
    moveDown() {
    const timeline = gsap.timeline({repeat: -1, yoyo: true});
    timeline.to('.mainSquare', {y: 200});
    timeline.to('.mainSquare', {x: 200});
    timeline.to('.mainSquare', {y: 400});

    gsap.to('.sideSquare',{
        y: 400,
        duration: 2,
        stagger: {
            each: 0.1,
            repeat: -1,
            yoyo: true,
            from: 'center',

        },

    });
}
    this.moveDown();
}*/

export const GsapTrainingComponent = () => {
    const theme = useTheme();
    const sxStyles = {
        title: {
            display: 'flex',
            flexDirection: 'row',
        },
        titleLetter: {
            display: 'inline-block',
        },
        squareContainer: {
            height: 1000,
            width: 1000,
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
        },
        slidingSquareContainer: {
            height: 4000,
            width: 1000,
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
        },
        sideSquare: {
            background: 'red',
            height: 200,
            width: 200,
        },
        mainSquare: {
            background: 'green',
            height: 200,
            width: 200,
        },
        slidingSquare: {
            height: 200,
            width: 200,
            padding: theme.spacing(2),
            textAlign: 'center',
            display:'flex',
            justifyContent: 'center',
        },
        slidingSquareTypo: {
            textAlign:'center',
            alignSelf: 'center',
            color: theme.palette.text.secondary,
        }
    };

    const titleRef = useRef();
    /*const header = useRef(null);*/

    const onLoad = () => {
        gsap.timeline({onComplete: console.log('complete')})
            .fromTo('.letter',
                {
                    opacity: 0,
                    x: -200,
                },
                {
                    opacity: 1,
                    x:0,
                    stagger: 0.33,
                    delay: 0.6,
                }
            ).to('.title',
            {
                y: 45,
                delay: 0.7,
            }).to('.letter',
            {
                margin: '0 3vw',
                delay: '0.3',
                duration: '1',
                repeat: 1,
                yoyo: true,
            }
        ).to('.letter',
            {
                x: -titleRef.current.clientWidth,
                delay: 0.3,
                duration: 0.5,
            }).to(window,
            {
                duration: 0.5,
                scrollTo: '.gsapTrainingSection',
            }).to('.slidingSquare',
            {
                backgroundColor: '#002',
            }).to('.letter',
            {
                x: 0,
                delay: 0.3,
                duration: 0.5,
            });
    }

    const slideInTop = (element, delay, duration) => {

        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: -200,
            },
            {
                opacity: 1,
                y:0,
                scrollTrigger: {
                    trigger: element,
                    start: 'top center',
                    end: "bottom center", //end: () => '+=' + document.querySelector(element).offsetWidth,
                    duration: duration || 1,
                    delay: delay || 1,
                    markers: true,
                    scrub: 1,
                    // toggleActions: 'restart pause reverse pause', // resume
                    onUpdate: (self) => {
                        //console.log("-> self.toFixed(3", self.progress.toFixed(3));
                    },
                    onEnter: (self) => {
                        console.log("-> self", self);
                    },/*
                        onLeave: (self) => {
                            console.log("-> self", self);
                        },
                        onEnterBack: (self) => {
                            console.log("-> self", self);
                        },
                        onLeaveBack: (self) => {
                            console.log("-> self", self);
                        }*/
                },
            }
        );

    }
    const slideInLeft = (element, delay, duration) => {

        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: -200,
            },
            {
                opacity: 1,
                x:0,
                scrollTrigger: {
                    trigger: element,
                    start: 'top center',
                    end: "bottom center",
                    duration: duration || 1,
                    delay: delay || 1,
                },
            }
        );

    }

    /*useEffect(() => {
        gsap.to(header.current, {color: '#8c0', duration: 2});
    }, [header]);*/

    useEffect(() => {
        onLoad();
    }, []);

    useEffect(() => {
        slideInTop('#slidingSquare1', 0.2, 1);
    }, []);
    useEffect(() => {
        slideInTop('#slidingSquare2', 0.4, 1);
    }, []);
    useEffect(() => {
        slideInLeft('#slidingSquare3', 0.6, 1);
    }, []);
    useEffect(() => {
        slideInLeft('#slidingSquare4', 0.8, 1);
    }, []);
    useEffect(() => {
        slideInTop('#slidingSquare5', 1, 1);
    }, []);

    const title = 'HELLO'.split('');

    return (
        <>
            <Box className={"title"} ref={titleRef} sx={sxStyles.title}>
                {
                    title.map((letter, index) => {
                        return <Typography key={'title-letter-'+index} className={'letter'}
                                           sx={sxStyles.titleLetter} variant={'h1'}>{letter}
                        </Typography>
                    })
                }

            </Box>
            <section className={"gsapTrainingSection"}>
                <Box className={"container"} sx={sxStyles.slidingSquareContainer}>
                    {/*<Box className={'animatedSquares sideSquare'} sx={sxStyles.sideSquare}/>
                    <Box className={'animatedSquares mainSquare'} sx={sxStyles.mainSquare}/>
                    <Box className={'animatedSquares sideSquare'} sx={sxStyles.sideSquare}/>*/}

                    <Paper id={'slidingSquare1'} className={'slidingSquare'} sx={sxStyles.slidingSquare}>
                        <Typography sx={sxStyles.slidingSquareTypo}>Box1</Typography>
                        <AnimatedText/>
                    </Paper>
                    <Paper id={'slidingSquare2'} className={'slidingSquare'} sx={sxStyles.slidingSquare}><Typography sx={sxStyles.slidingSquareTypo}>Box2</Typography></Paper>
                    <Paper id={'slidingSquare3'} className={'slidingSquare'} sx={sxStyles.slidingSquare}><Typography sx={sxStyles.slidingSquareTypo}>Box3</Typography></Paper>
                    <Paper id={'slidingSquare4'} className={'slidingSquare'} sx={sxStyles.slidingSquare}><Typography sx={sxStyles.slidingSquareTypo}>Box4</Typography></Paper>
                    <Paper id={'slidingSquare5'} className={'slidingSquare'} sx={sxStyles.slidingSquare}><Typography sx={sxStyles.slidingSquareTypo}>Box5</Typography></Paper>
                </Box>
            </section>
            <section className={'lastSection'}>

            </section>
        </>
    );
}

/*
<Paper id={'slidingSquare1'} className={'slidingSquare'} sx={sxStyles.slidingSquare}>
    <Typography sx={sxStyles.slidingSquareTypo}>Box1</Typography>
    <AnimatedText ref={header}/>
</Paper>*/
