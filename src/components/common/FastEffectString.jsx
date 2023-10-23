import React, {useEffect, useRef, useState} from 'react';
import {Typography} from "@mui/material";


const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

const FastEffectString = ({ text, delay = false, duration = 1000, sxStyles, extraClass = '' }) => {
    const [animatedText, setAnimatedText]       = useState('');
    const intervalRef = useRef(null);

    const startAnimation = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            let newAnimatedText = '';
            for (const element of text) {
                newAnimatedText += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            setAnimatedText(newAnimatedText);
        }, 50);
    };
    const endAnimation = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setAnimatedText(text);
    };
    useEffect(() => {
        const timer = delay ? setTimeout(() => {
            startAnimation();
            setTimeout(endAnimation, duration);
        }, delay) : setTimeout(endAnimation, duration);

        startAnimation();

        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(timer);
        };
    }, [text, delay, duration]);

    return (
        <Typography sx={sxStyles} className={'text-outline-red text-shadow ' + extraClass}>{animatedText}</Typography>
    );
};

export default FastEffectString;


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