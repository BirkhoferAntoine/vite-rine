import React, { createContext, useState } from 'react';
import { startClick } from '../components/orb/orb.config.js';

const SkillsContext = createContext();

function SkillsProviderWrapper({ children }) {
    const [orbInit, setOrbInit] = useState(false);
    const [skillsArray, setSkillsArray] = useState([
        'Hey there, I am interactive',
        ' ',
        startClick,
        'You can hold click or tap to move me around',
    ]);

    return (
        <SkillsContext.Provider
            value={{
                orbInit,
                setOrbInit,
                skillsArray,
                setSkillsArray,
            }}
        >
            {children}
        </SkillsContext.Provider>
    );
}

export { SkillsProviderWrapper, SkillsContext };
