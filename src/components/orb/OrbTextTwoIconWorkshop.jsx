import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import { DiReact } from "react-icons/di";
import {SVGLoader} from "three/addons/loaders/SVGLoader.js";
import ReactDOMServer from 'react-dom/server';

const skillList = [
    'React',
    'Symfony',
    'Php',
    'GSAP',
    'HTML',
    'CSS',
    'Linux',
    'Laravel',
    'THREE.js',
    'Next.js',
    'Fabric.js',
    'Figma',
    'FFmpeg',
    'PHPStorm',
    'Git',
];

const closestCount = Math.ceil(Math.sqrt(skillList.length));

const randomWord = () => {
    return skillList[Math.floor(Math.random() * skillList.length)];
}
function Word({ children, ...props }) {
    const ref                   = useRef();
    const [hovered, setHovered] = useState(false);

    const color     = new THREE.Color();
    const fontProps = { font: 'src/assets/jost-latin-500-normal.woff2', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };

    const over  = (e) => (e.stopPropagation(), setHovered(true));
    const out   = () => setHovered(false);

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
        ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1);
    });

    return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
}

function buildIcon({ children, ...props }) {
    const ref                   = useRef();
    const [hovered, setHovered] = useState(false);

    // Load the icon texture

    /*const textureLoader = new THREE.TextureLoader();
    const svgData   = new XMLSerializer().serializeToString(<DiReact />);
    const loader    = new SVGLoader();
    const paths     = loader.parse(svgData).paths;*/
    const over  = (e) => (e.stopPropagation(), setHovered(true));
    const out   = () => setHovered(false);

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
        ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1);
    });

    return <SVGShape ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} icon={DiReact} />
}

function SVGShape({ icon, color }) {
    const [svgMarkup, setSvgMarkup] = useState('');
    const { paths } = useLoader(SVGLoader, `data:image/svg+xml;utf8,${encodeURIComponent(svgMarkup)}`);

    useEffect(() => {
        const svgString = ReactDOMServer.renderToString(icon({ color }));
        setSvgMarkup(svgString);
    }, [icon, color]);

    return (
        <>
            {paths.map((path, index) => (
                <mesh key={index}>
                    <extrudeGeometry args={[path.toShapes(true), { depth: 2, bevelEnabled: false }]} />
                    <meshStandardMaterial color={color} />
                </mesh>
            ))}
        </>
    );
}



function Cloud({ count = 4, radius = 20 }) {
    // Create a count x count random words with spherical distribution

    let skillIndex = 0;
    const words = useMemo(() => {
        const temp      = []
        const spherical = new THREE.Spherical();
        const phiSpan   = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;

        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++) {
                if (skillList[skillIndex]) {
                    temp.push([
                        new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
                        skillList[skillIndex]
                    ]);
                    skillIndex++;
                }
            }

        return temp
    }, [count, radius]);
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function OrbTextTwo() {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Cloud count={closestCount} radius={16} />
            <TrackballControls />
        </Canvas>
    )
}



/*
function SVGShape({ icon, color }) {
    const [svgMarkup, setSvgMarkup] = useState('');
    const { paths } = useLoader(SVGLoader, `data:image/svg+xml;utf8,${encodeURIComponent(svgMarkup)}`);

    useEffect(() => {
        const svgString = ReactDOMServer.renderToString(icon({ color }));
        setSvgMarkup(svgString);
    }, [icon, color]);

    return (
        <>
            {paths.map((path, index) => (
                <mesh key={index}>
                    <extrudeGeometry args={[path.toShapes(true), { depth: 2, bevelEnabled: false }]} />
                    <meshStandardMaterial color={color} />
                </mesh>
            ))}
        </>
    );
}

function MyScene() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <SVGShape icon={FiCircle} color={'#ff0000'} />
        </Canvas>
    );
}*/
