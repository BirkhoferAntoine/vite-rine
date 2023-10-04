import React from 'react';
import {gsap, Power2, Elastic} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { EasePack } from 'gsap/EasePack'; //
import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, EasePack, CustomEase);
/*ScrollTrigger.defaults({
    toggleActions: 'restart pause reverse pause',
    markers: true,
});*/

export const hide = (element) => {
    gsap.set(element, {autoAlpha: 0});
}

export const slideAnimation = (element, x, y) => {
    gsap.fromTo(
        element,
        {
            autoAlpha: 0,
            x,
            y,
        },
        {
            autoAlpha: 1,
            x: 0,
            y: 0,
        }
    );
}

export const assignDirection = (direction) => {
    const sign  = (direction === 'left' || direction === 'top') ? (- 1) : 1;
    return {
        x: (direction === 'left' || direction === 'right') ? (200*sign) : 0,
        y:(direction === 'top' || direction === 'bottom') ? (200*sign) : 0
    };
}

export const slideInFrom = (element, trigger = element, direction = 'left', delay = 1, duration = 1) => {

    hide(element);
    const {x, y} = assignDirection(direction);

    gsap.fromTo(
        element,
        {
            autoAlpha: 0,
            x,
            y,
        },
        {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scrollTrigger: {
                trigger,
                start: 'top center',
                end: "bottom center",
                duration: duration || 1,
                delay: delay || 1,
                markers: true,
                toggleActions: 'play reverse restart reverse',//'pause',
            }
        }
    );
}

export const slideInFromWithReverseY = (element, trigger = element, direction = 'up', delay = 1, duration = 1) => {
    const {x, y} = assignDirection(direction);

    hide(element);
    ScrollTrigger.create({
        trigger: trigger,
        start: 'top center',
        end: "bottom center",
        duration: duration || 1,
        delay: delay || 1,
        markers: true,
        scrub: 1,
        toggleActions: 'play reverse restart restart',//'pause',
        onEnter:        () => { slideAnimation(element, x, y); },
        onEnterBack:    () => { slideAnimation(element, x, -y); },
        onLeave:        () => { hide(element); },
    });
}

export const alternateTextAnimation = (element) => {
    gsap.fromTo(element,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 1.5,
            ease: 'slow',
        }
    );
}


export const fadeIn = (element, trigger = element, delay = 1, duration = 1) => {

    gsap.fromTo(
        element,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            scrollTrigger: {
                trigger,
                start: 'top center',
                end: "bottom center",
                duration: duration || 1,
                delay: delay || 1,
                markers: true,
                toggleActions: 'play reverse restart reverse',//'pause',
            },
        }
    );

}

export const slightFlyingMovementAnimation = (element, delay = 1) => {

    const anim = gsap.fromTo(
        element,
        {
            delay: delay,
            y: 0,
        },
        {
            y: -8,
            ease: Power2.easeInOut,
            duration: 2,
            yoyo: true,
            repeat:-1,
            yoyoEase: Power2.easeInOut,
            stagger: 0.33,
            delay: 0.6,
            scrollTrigger: {
                onLeave: () => {
                    anim.kill();
                }
            }
        }
    );
    return anim;
    /*gsap.to(
        element,
        {
            duration: 2,
            y: -50,
            yoyo: true,
            repeat: -1,
            ease: "power1.out",
            modifiers: {
                x: gsap.utils.unitize((_, i) => gsap.utils.random(-5, 5, true)),
                rotation: gsap.utils.unitize((_, i) => gsap.utils.random(-10, 10, true)),
            },
        }
    )*/
}

export const filterShadowAnimation = (element) => {

    gsap.fromTo(
        element,
        {
            filter: 'drop-shadow(0 0 6px var(--color-primary))',
            //scale: 1,
        },
        {
            filter: 'drop-shadow(0 0 6rem var(--color-primary))',
            //scale: 1, //3
            ease: 'expo-out',
            duration: 4,
            yoyo: true,
            repeat:-1,
            yoyoEase: 'expo-in',
            stagger: 0.1,
            delay: 0.6,
        }
    );
}

export const scaleAnimation = (element, delay = 1) => {


    gsap.to(
        element,
        {
            duration: 4,
            delay: delay,
            scale: 50,
            ease: "power1.out",
        }
    )
}

export const paperFadeIn = (element, trigger = element, delay = 1, duration = 1) => {

    gsap.fromTo(
        element,
        {
            background: 'none',
            border: 'none',
        },
        {
            backgroundColor: '#100E02',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            /*border: '1px 0px 1px 0px solid #FCD81C',*/
            borderWidth: '1px 0px',
            borderColor: '#FCD81C',
            borderStyle: 'solid',
            scrollTrigger: {
                trigger,
                start: 'top center',
                end: "bottom center",
                duration: duration || 1,
                delay: delay || 1,
                markers: true,
                toggleActions: 'play reverse restart reverse',//'pause',
            },
        }
    );

}

export const slideInLeft = (element, delay, duration) => {

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

export const slideInTop = (element, delay, duration) => {

    gsap.fromTo(
        element,
        {
            opacity: 0,
            y: -200,
        },
        {
            opacity: 1,
            y: 0,
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