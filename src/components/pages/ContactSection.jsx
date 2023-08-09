import React, {useRef, useEffect} from 'react';
import {Button, Card, Container, Paper, Typography} from "@mui/material";
import CircuitLineLosange from "../CircuitLineLosange.jsx";
import {hide, scaleAnimation, slideAnimation} from "../GSAPFunctions.jsx";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin({ScrollTrigger});

const ContactSection = () => {

    const sxStyles = {
        contactBtn: {

        },
        contactRedBtn: {
            padding: '5rem',
            borderRadius: '50%',
        },
        contactTypo: {
            color: 'var(--color-primary)',
            fontFamily: 'Beth Ellen',
            fontSize: '2rem',
            lineHeight: 1,
            fontWeight: '400',

            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: 'var(--bg-color-default)',
        },
    };

    const losangeRef = useRef(null);

    /*useEffect(() => {
        ScrollTrigger.create({
            trigger: losangeRef.current,
            start: 'top center',
            end: "bottom center",
            duration: 4,
            delay: 2,
            markers: true,
            scrub: 1,
            toggleActions: 'play reverse restart restart',//'pause',
            onEnter:        () => { scaleAnimation(losangeRef.current);},
            onEnterBack:    () => { scaleAnimation(losangeRef.current); },
            onLeave:        () => { hide(losangeRef.current); },
        });

    }, []);*/

    return (
        <section id={'contact-section'}>
            {/*<Typography variant={'h1'}>Contact</Typography>*/}
            <Container sx={{position:'relative', zIndex: 9999999}} className={'contact-container'}>

                <Paper className={'contact-paper'}>
                    <Card className={'contact-box'}>
                        <Typography sx={sxStyles.contactTypo} variant={'h4'} className={'contact-typography'}>
                            Contact me
                        </Typography>
                        <CircuitLineLosange ref={losangeRef} addClassName={'floating'} width={'55vh'} rotate={'45deg'} maxPad={'42px'} maxBorder={'24px'}/>
                        <Button sx={sxStyles.contactRedBtn} variant={'contained'} className={'contact-btn'} color={'warning'}></Button>
                    </Card>
                </Paper>
            </Container>
        </section>
    );
};

export default ContactSection;
