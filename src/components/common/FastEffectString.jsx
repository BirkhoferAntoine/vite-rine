import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";

const FastEffectString = ({ text, delay = false, duration = 1000, sxStyles, extraClass = '' }) => {
    const [animatedText, setAnimatedText]       = useState('');
    const characters        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength  = characters.length;

    useEffect(() => {
        console.log("-> delay", delay);
        let interval;
        if (delay) {
            setTimeout(() => {
                interval = animateText();
                setTimeout(() => {
                    clearInterval(interval);
                    setAnimatedText(text);
                }, duration);
            }, delay);
        } else {
            interval = animateText();
            setTimeout(() => {
                clearInterval(interval);
                setAnimatedText(text);
            }, duration);
        }
    }, []);

    /*useEffect(() => {
        setTimeout(() => {
            setStopAnimate(true)
        }, 2000);
    }, [stopAnimate]);*/

  /*  useEffect(() => {
        if (!stopAnimate) {
            const interval = setInterval(() => {
            let newAnimatedText = '';
            for (const element of text) {
                newAnimatedText += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
            }
            setAnimatedText(newAnimatedText);
            }, 100);
            return () => clearInterval(interval);
        } else {
            setAnimatedText(text);
        }

    }, [stopAnimate]);*/
    /*
        const interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);*/
    function animateText () {

        return setInterval(() => {
            let newAnimatedText = '';
            for (const element of text) {
                /*newAnimatedText += String.fromCharCode(Math.floor(Math.random() * 93) + 33);*/
                newAnimatedText += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            setAnimatedText(newAnimatedText);
        }, 50);
    }

    return (
        <Typography sx={sxStyles} className={'text-outline-red text-shadow ' + extraClass}>{animatedText}</Typography>
    );
};

export default FastEffectString;
