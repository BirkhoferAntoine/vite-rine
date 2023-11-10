import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const jost = 'src/assets/jost-all-500-normal.woff';
const beth = 'src/assets/beth-ellen-latin-400-normal.woff';
const Word = ({ children, handleOrbTextClick = null, ...props }) => {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    const color = new THREE.Color();
    const fontProps = {
        font: jost,
        fontSize: 2.5,
        letterSpacing: -0.05,
        lineHeight: 1,
        'material-toneMapped': false,
    };

    const over = (e) => {
        e.stopPropagation();
        setHovered(true);
    };
    const out = () => setHovered(false);

    const handleWordClick = () => {
        if (handleOrbTextClick) handleOrbTextClick(children);
    };

    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered && handleOrbTextClick) {
            document.body.style.cursor = 'pointer';
        }
        return () => (document.body.style.cursor = 'auto');
    }, [hovered]);
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion);
        // Animate font color
        ref.current.material.color.lerp(
            color.set(
                hovered
                    ? '#E53D00'
                    : children === '../Back' ||
                      children === 'Click here to start'
                    ? '#FF9F00'
                    : '#FCD81C'
            ),
            0.1
        );
    });

    return (
        <Text
            ref={ref}
            {...(handleOrbTextClick && { onClick: handleWordClick })}
            onPointerOver={over}
            onPointerOut={out}
            {...props}
            {...fontProps}
        >
            {children}
        </Text>
    );
};

export default Word;
