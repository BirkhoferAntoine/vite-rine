import React, {useRef, useEffect} from "react";
import {Box, Button, Card, Container, Paper, Typography} from "@mui/material";
import CircuitLineLosange from "../background/CircuitLineLosange.jsx";
import {
    animateCTAButton,
    hide,
    scaleAnimation,
    slideAnimation,
} from "../common/GSAPFunctions.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import SmartphoneMockup from "../common/smartphonemockup/SmartphoneMockup.jsx";
import CallToActionButton from "../common/CallToActionButtonV2.jsx";
import SocialMediaBox from "../layout/SocialMediaBox.jsx";
import Logo from "../layout/Logo.jsx";

gsap.registerPlugin({ScrollTrigger});

const ContactSection = () => {

    const callToActionRef = useRef(null);

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

    useEffect(() => {
        animateCTAButton(callToActionRef.current, 'contact-container');
    }, []);

    return (
        <section id={"contact-section"}>
            {/*<Typography variant={'h1'}>Contact</Typography>*/}
            <Container sx={{position: "relative"}} className={"contact-container"}>
                <SmartphoneMockup navbar={<Logo/>} footer={<SocialMediaBox/>}>
                    <Typography>Contact me to know more about my past and present projects !</Typography>
                    <CallToActionButton ref={callToActionRef}>Contact me</CallToActionButton>
                </SmartphoneMockup>
            </Container>
        </section>
    );
};

export default ContactSection;

{
    /*<Box className={'contact-mobile-nav'}>

                          </Box>
                          <Box className={'contact-mobile-body'}>
                              <Typography sx={sxStyles.contactTypo} variant={'h4'} className={'contact-typography'}>
                                  Find more about my projects
                              </Typography>
                              <Button>
                                  <Typography sx={sxStyles.contactTypo} variant={'h4'} className={'contact-typography'}>
                                      Contact me and PowerUp your business
                                  </Typography>
                              </Button>
                          </Box>
                          <Box className={'contact-mobile-footer'}>

                          </Box>*/
}

{
    /*<CircuitLineLosange ref={losangeRef} addClassName={'floating'} width={'55vh'} rotate={'45deg'} maxPad={'42px'} maxBorder={'24px'}/>
                          <Button sx={sxStyles.contactRedBtn} variant={'contained'} className={'contact-btn'} color={'warning'}></Button>*/
}
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