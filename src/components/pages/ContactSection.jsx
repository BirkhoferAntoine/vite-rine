import React, { useRef, useEffect, useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import {
    animateCTAButton,
    fadeOutFromTrigger,
} from '../../helpers/animation.helper.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmartphoneMockup from '../common/smartphonemockup/SmartphoneMockup.jsx';
import CallToActionButton from '../common/CallToActionButtonV2.jsx';
import SocialMediaBox from '../layout/SocialMediaBox.jsx';
import Logo from '../layout/Logo.jsx';
import ContactForm from '../common/contactForm/ContactForm.jsx';

gsap.registerPlugin({ ScrollTrigger });

const ContactSection = () => {
    const callToActionRef = useRef(null);
    const [showForm, setShowForm] = useState(true);

    const sxStyles = {
        contactBtn: {},
        contactRedBtn: {
            padding: '5rem',
            borderRadius: '50%',
        },
        contactTypo: {
            color: 'var(--color-primary)',
            //fontFamily: 'Beth Ellen',
            fontSize: '1rem',
            lineHeight: 1,
            fontWeight: '400',

            //WebkitTextStrokeWidth: '2px',
            //WebkitTextStrokeColor: 'var(--bg-color-default)',
        },
        mobileNav: {},
        mobileBody: {},
        mobileFooter: {},
    };

    const handleCTABtnClick = () => {
        setShowForm(true);
    };

    useEffect(() => {
        animateCTAButton(callToActionRef.current, 'contact-container');
    }, []);

    useEffect(() => {
        fadeOutFromTrigger('.header', '#contact-section', 1, 1.5);
        fadeOutFromTrigger('.footer', '#contact-section', 1, 1.5);
    }, []);

    return (
        <section id={'contact-section'}>
            {/*<Typography variant={'h1'}>Contact</Typography>*/}
            <Container
                sx={{ position: 'relative' }}
                className={'contact-container'}
            >
                {showForm ? (
                    <SmartphoneMockup
                        navbar={<Logo />}
                        footer={<SocialMediaBox />}
                    >
                        <Paper
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                height: '100%',
                            }}
                        >
                            <ContactForm />
                        </Paper>
                    </SmartphoneMockup>
                ) : (
                    <SmartphoneMockup
                        navbar={<Logo />}
                        footer={<SocialMediaBox />}
                    >
                        <Paper
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                height: '100%',
                                width: '100%',
                                alignItems: 'center',
                            }}
                        >
                            <Typography mb={4}>
                                Contact me to know more about my past and
                                present projects !
                            </Typography>
                            <CallToActionButton
                                ref={callToActionRef}
                                href={'mailto:birkhoferantoine@gmail.com'}
                            >
                                Contact me
                            </CallToActionButton>
                        </Paper>
                    </SmartphoneMockup>
                )}
            </Container>
        </section>
    );
};

export default ContactSection;
