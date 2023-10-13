import React, {useEffect, useRef, useState} from 'react';
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {Text} from "@react-three/drei";
import {alternateOrbScaleAnimation} from "../common/GSAPFunctions.jsx";



const jost = 'src/assets/jost-all-500-normal.woff';
const beth = 'src/assets/beth-ellen-latin-400-normal.woff';
const Word = ({ children, handleOrbTextClick, handleOrbScaleAnimation, ...props }) => {
    const ref                           = useRef();
    const [hovered, setHovered]         = useState(false);

    const color     = new THREE.Color();
    const fontProps = { font: jost, fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };

    const over  = (e) => {
        e.stopPropagation();
        setHovered(true);
    };
    const out   = () => setHovered(false);

    const handleWordClick = (e) => {
        handleOrbTextClick(children);
        handleOrbScaleAnimation();
        console.log("=>(OrbTextThree.jsx:117) children", children);
        console.log("=>(OrbTextThree.jsx:117) ref", ref);
    }

    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer';
        return () => (document.body.style.cursor = 'auto');
    }, [hovered]);
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion);
        // Animate font color
        ref.current.material.color.lerp(color.set(hovered ? '#E53D00' : children === 'Back' ? '#FF9F00' : '#FCD81C'), 0.1);
    });

    return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={handleWordClick} {...props} {...fontProps} children={children} />
}

export default Word;
