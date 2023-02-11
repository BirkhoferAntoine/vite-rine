import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
    const [textIndex, setTextIndex] = useState(0);
    const texts = ['Hello', 'Hi', 'Hey'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return <div>{texts[textIndex]}</div>;
};

export default AnimatedText;
