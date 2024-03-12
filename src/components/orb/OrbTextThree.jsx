import React from 'react';
import { forwardRef, useContext } from 'react';
import { SkillsContext } from '../../contexts/skills.context.jsx';
import { Canvas } from '@react-three/fiber';
import { TrackballControls } from '@react-three/drei';
import { Cloud } from './Cloud.jsx';
import { backClick } from './orb.config.js'; //  Sphere, Torus,


export const OrbTextThree = forwardRef(function OrbTextThree(props, ref) {
    const { skillsArray } = useContext(SkillsContext);

    const randomWord = (wordArray) => {
        return wordArray[Math.floor(Math.random() * props.skillList.length)];
    };

    return (
        <Canvas
            ref={ref}
            dpr={[1, 2]}
            camera={{ position: [0, 0, 45], fov: 90 }}
            className={'orb-canvas-container'}
        >
            <Cloud
                skillList={skillsArray}
                noClick={skillsArray.includes(backClick)}
                handleOrbTextClick={props.handleOrbTextClick}
            />
            <TrackballControls
                minDistance={25} // Minimum zoom distance
                maxDistance={50} // Maximum zoom distance
            />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
        </Canvas>
    );
});
