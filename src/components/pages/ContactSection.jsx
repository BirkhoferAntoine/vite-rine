import React, {useRef, useEffect, useState} from "react";
import {Container, Paper} from "@mui/material";
import {
    animateCTAButton,
} from "../common/GSAPFunctions.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import SmartphoneMockup from "../common/smartphonemockup/SmartphoneMockup.jsx";
import CallToActionButton from "../common/CallToActionButtonV2.jsx";
import SocialMediaBox from "../layout/SocialMediaBox.jsx";
import Logo from "../layout/Logo.jsx";
import ContactForm from "../common/contactForm/ContactForm.jsx";

gsap.registerPlugin({ScrollTrigger});

const ContactSection = () => {

    const callToActionRef   = useRef(null);
    const [showForm, setShowForm]       = useState(false);

    const sxStyles = {
        contactBtn: {},
        contactRedBtn: {
            padding: "5rem",
            borderRadius: "50%",
        },
        contactTypo: {
            color: "var(--color-primary)",
            //fontFamily: 'Beth Ellen',
            fontSize: "1rem",
            lineHeight: 1,
            fontWeight: "400",

            //WebkitTextStrokeWidth: '2px',
            //WebkitTextStrokeColor: 'var(--bg-color-default)',
        },
        mobileNav: {},
        mobileBody: {},
        mobileFooter: {},
    };

    const handleCTABtnClick = () => {
        setShowForm(true);
    }

    useEffect(() => {
        animateCTAButton(callToActionRef.current, 'contact-container');
    }, []);

    return (
        <section id={"contact-section"}>
            {/*<Typography variant={'h1'}>Contact</Typography>*/}
            <Container sx={{position: "relative"}} className={"contact-container"}>
                {!showForm ? (
                    <SmartphoneMockup navbar={<Logo/>} footer={<SocialMediaBox/>}>
                        {/*<Typography mb={4}>Contact me to know more about my past and present projects !</Typography>
                        <CallToActionButton ref={callToActionRef} callback={handleCTABtnClick}>Contact me</CallToActionButton>*/}
                        <Paper sx={{display: 'flex', justifyContent: 'space-evenly', height: '100%'}}>
                            <ContactForm />
                        </Paper>
                    </SmartphoneMockup>
                ) : (
                    <Paper>
                        <ContactForm />
                    </Paper>
                )}
            </Container>
        </section>
    );
};

export default ContactSection;
