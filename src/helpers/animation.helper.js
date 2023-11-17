import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { EasePack } from 'gsap/EasePack'; //
import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, EasePack, CustomEase);
/*ScrollTrigger.defaults({
    toggleActions: 'restart pause reverse pause',
    devMode,
});*/

const devMode = false;

export const hide = (element) => {
    gsap.set(element, { autoAlpha: 0 });
};

export const animateCTAButton = (element, trigger) => {
    gsap.fromTo(
        element,
        {
            scrollTrigger: {
                trigger: trigger,
                start: 'top center',
                end: 'bottom center',
                delay: 1,
                devMode,
                toggleActions: 'restart pause reverse pause', //'pause',
            },
            opacity: 0,
            filter: 'drop-shadow(0 0 600px var(--color-primary)) drop-shadow(0 0 1600px var(--color-secondary))',
            ease: 'back',
            duration: 2,
            /*filter: "drop-shadow(0 0 6px var(--color-primary)) drop-shadow(0 0 0px var(--color-secondary))",*/
        },
        {
            /*scrollTrigger: {
                trigger: trigger,
                start: 'top center',
                end: "bottom center",
                delay: 1,
                devMode,
                toggleActions: 'play pause play resume',//'pause',
            },*/
            opacity: 1,
            filter: 'drop-shadow(0 0 60px var(--color-primary)) drop-shadow(0 0 160px var(--color-secondary))',
            ease: 'back',
            /*filter: "drop-shadow(0 0 60px var(--color-primary)) drop-shadow(0 0 160px var(--color-secondary))",*/
            delay: 0.3,
            duration: 2,
            yoyo: true,
            repeat: -1,
        }
    ) /*.fromTo(callToActionRef.current,
            {
                filter: "drop-shadow(0 0 160px var(--color-primary)) drop-shadow(0 0 20px var(--color-secondary)) ",
                ease: 'none',
                duration: 4,
                /!*delay: -1,*!/
            },
            {
                filter: "drop-shadow(0 0 20px var(--color-primary)) drop-shadow(0 0 60px var(--color-secondary)) ",
                /!*delay: -1,*!/
                yoyo: true,
                ease: 'none',
                yoyoEase: 'none',
                duration: 4,
                repeat: -1,
            },
        )*/;
};

export const slideAnimation = (element, x, y, toX = 0, toY = 0) => {
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
};

export const assignDirection = (direction) => {
    const sign = direction === 'left' || direction === 'top' ? -1 : 1;
    return {
        x: direction === 'left' || direction === 'right' ? 200 * sign : 0,
        y: direction === 'top' || direction === 'bottom' ? 200 * sign : 0,
    };
};

export const slideInFrom = (
    element,
    trigger = element,
    direction = 'left',
    delay = 1,
    duration = 1
) => {
    hide(element);
    const { x, y } = assignDirection(direction);

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
            duration: duration || 1,
            delay: delay || 1,
            scrollTrigger: {
                trigger,
                start: 'top center',
                end: 'bottom center',
                devMode,
                toggleActions: 'play reverse restart reverse', //'pause',
            },
        }
    );
};

export const slideInFromWithReverseY = (
    element,
    trigger = element,
    direction = 'up',
    delay = 1,
    duration = 1
) => {
    const { x, y } = assignDirection(direction);

    hide(element);
    ScrollTrigger.create({
        trigger: trigger,
        start: 'top center',
        end: 'bottom center',
        duration: duration || 1,
        delay: delay || 1,
        devMode,
        scrub: 1,
        toggleActions: 'play reverse restart restart', //'pause',
        onEnter: () => {
            slideAnimation(element, x, y);
        },
        onEnterBack: () => {
            slideAnimation(element, x, -y);
        },
        /*onLeave:        () => { hide(element); },*/
    });
};

export const slideOutFromWithReverseY = (
    element,
    trigger = element,
    direction = 'up',
    delay = 1,
    duration = 1
) => {
    const { x, y } = assignDirection(direction);

    hide(element);
    ScrollTrigger.create({
        trigger: trigger,
        start: 'top center',
        end: 'bottom center',
        duration: duration || 1,
        delay: delay || 1,
        devMode,
        toggleActions: 'play reverse restart restart', //'pause',
        onEnter: () => {
            slideAnimation(element, 0, 0, x, y);
        },
        /*onLeave:        () => { hide(element); },*/
    });
};

export const fadeIn = (element, delay = 0, duration = 1.5) => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: duration,
            delay: delay,
            ease: 'slow',
        }
    );
};

export const fadeOut = (element, delay = 0, duration = 1.5) => {
    gsap.to(
        element,
        {
            opacity: 0,
            duration: duration,
            delay: delay,
            ease: 'slow',
        }
    );
};

export const fadeOutFromTrigger = (element, trigger = element, delay = 1, duration = 1) => {
    gsap.to(
        element,
        {
            opacity: 0,
            duration: duration || 1,
            delay: delay || 1,
            ease: 'slow',
            scrollTrigger: {
                trigger,
                start: 'top center',
                end: 'bottom center',
                devMode,
                toggleActions: 'play reverse restart reverse',
            },
        }
    );
};
export const fadeInFromTrigger = (element, trigger = element, delay = 1, duration = 1) => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: duration || 1,
            delay: delay || 1,
            ease: 'slow',
            scrollTrigger: {
                trigger,
                start: 'top center',
                end: 'bottom center',
                devMode,
                toggleActions: 'play none none none', //'pause',
            },
        }
    );
};

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
            repeat: -1,
            yoyoEase: Power2.easeInOut,
            stagger: 0.33,
            delay: 0.6,
            scrollTrigger: {
                onLeave: () => {
                    anim.kill();
                },
            },
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
};

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
            repeat: -1,
            yoyoEase: 'expo-in',
            stagger: 0.1,
            delay: 0.6,
        }
    );
};

export const scaleAnimation = (element, delay = 1) => {
    gsap.to(element, {
        duration: 4,
        delay: delay,
        scale: 50,
        ease: 'power1.out',
    });
};

export const paperFadeIn = (
    element,
    trigger = element,
    delay = 1,
    duration = 1
) => {
    gsap.fromTo(
        element,
        {
            background: 'none',
            border: 'none',
        },
        {
            backgroundColor: '#100E02',
            backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            /*border: '1px 0px 1px 0px solid #FCD81C',*/
            borderWidth: '1px 0px',
            borderColor: '#FCD81C',
            borderStyle: 'solid',
            duration: duration || 1,
            delay: delay || 1,
            scrollTrigger: {
                trigger,
                start: 'top center',
                end: 'bottom center',
                devMode,
                toggleActions: 'play reverse restart reverse', //'pause',
            },
        }
    );
};

export const paperBorderFadeIn = (
    element,
    trigger = element,
    delay = 1,
    duration = 1
) => {
    gsap.fromTo(
        element,
        {
            background: 'none',
            border: 'none',
            transform: 'rotate(180deg)',
        },
        {
            rotate: '0deg',
            backgroundColor: '#100E02',
            backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            /*border: '1px 0px 1px 0px solid #FCD81C',*/
            borderWidth: '2px 1px',
            borderColor: '#FCD81C',
            borderStyle: 'solid',
            borderRadius: '50%',
            ease: 'expo-in',
            duration: duration || 1,
            delay: delay || 1,
            scrollTrigger: {
                trigger,
                start: 'top center',
                end: 'bottom center',
                devMode,
                toggleActions: 'play reverse restart reverse', //'pause',
            },
        }
    );
};

export const slideInLeft = (element, delay, duration) => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            x: -200,
        },
        {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: element,
                start: 'top center',
                end: 'bottom center',
                duration: duration || 1,
                delay: delay || 1,
            },
        }
    );
};

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
                end: 'bottom center', //end: () => '+=' + document.querySelector(element).offsetWidth,
                duration: duration || 1,
                delay: delay || 1,
                devMode,
                scrub: 1,
                // toggleActions: 'restart pause reverse pause', // resume
                onUpdate: (self) => {
                    //console.log("-> self.toFixed(3", self.progress.toFixed(3));
                },
                onEnter: (self) => {
                    console.log('-> self', self);
                } /*
                        onLeave: (self) => {
                            console.log("-> self", self);
                        },
                        onEnterBack: (self) => {
                            console.log("-> self", self);
                        },
                        onLeaveBack: (self) => {
                            console.log("-> self", self);
                        }*/,
            },
        }
    );
};

export const alternateOrbScaleAnimation = (
    element,
    delay = 0,
    stepDuration = 1
) => {
    const canvasWidth = element.offsetWidth;
    const canvasHeight = element.offsetHeight;

    const initialWidth = element.style.width;
    const initialHeight = element.style.height;

    const initialX = '0%';
    const initialY = '0%';

    gsap.fromTo(
        element.style,
        {
            width: '0%',
            height: '0%',
            left: '50%',
            top: '50%',
            transformOrigin: 'center center', // Set the transform origin to the center
            duration: stepDuration,
            delay: delay,
            ease: 'power2.inOut',
        },
        {
            width: initialWidth,
            height: initialHeight,
            left: initialX,
            top: initialY,
            transformOrigin: 'center center', // Set the transform origin to the center
            duration: stepDuration,
            delay: delay,
            ease: 'power2.inOut',
        }
    );
};

/*

export const animateScale = (element, scale, delay = 1, duration = 1) => {
    console.log('=>(animation.helper.js:330) element', element);

    /!*gsap.to(element.current.style.scale, {
        x: scale,
        y: scale,
        z: scale,
        duration: duration,
        delay: delay,
    });*!/
};

export const animateCollapse = (element, delay = 0, duration = 1) => {
    /!*useFrame(() => {
        // Define the animation
        gsap.to(cloudRef.current.scale, {
            x: 0.2, // Scale to 20% of the original size
            y: 0.2,
            z: 0.2,
            duration: 2, // Animation duration in seconds
        });
    });*!/

    animateScale(element, 0.1, delay, duration);

    // Implement your collapse animation here using Tween or GSAP
    // Once the animation is complete, call the callback
    // This callback will replace the words and trigger the expand animation
};*/
