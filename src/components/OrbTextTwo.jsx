import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {Sphere, Text, Torus, TrackballControls, Svg, OrbitControls} from '@react-three/drei';

const jost = 'src/assets/jost-all-500-normal.woff';
const beth = 'src/assets/beth-ellen-latin-400-normal.woff';
const reactIcon = 'src/assets/devicons-master/!SVG/react.svg';

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

const Word = ({ children, ...props }) => {
    const ref                           = useRef();
    const [hovered, setHovered]         = useState(false);

    const color     = new THREE.Color();
    const fontProps = { font: jost, fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };

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
        ref.current.material.color.lerp(color.set(hovered ? '#E53D00' : '#FCD81C'), 0.1);
    });

    return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
}

const Cloud = ({ count = 4, radius = 20 }) => {
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

/*
function Sphere({ radius = 1.5 }) {
    const { scene, camera } = useThree();
    const geometry  = new THREE.SphereGeometry(radius, 50, 50);
    const material  = new THREE.MeshBasicMaterial({ color: '#FCD81C', wireframe: true });
    const sphere    = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    return null;
}
*/

export default function OrbTextTwo() {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <Cloud count={closestCount} radius={16} />
            <TrackballControls />
        </Canvas>
    )
}

/*
*
*
* <OrbitControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial color={0xffffff} emissive={0x444444} shininess={100} />
            </mesh>
            <mesh position={[1.5, 0, 0]}>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshPhongMaterial color={0xff0000} emissive={0x440000} shininess={100} />
            </mesh>
            <mesh position={[-1.5, 0, 0]}>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshPhongMaterial color={0x0000ff} emissive={0x000044} shininess={100} />
            </mesh>
            <mesh position={[0, 1.5, 0]}>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshPhongMaterial color={0x00ff00} emissive={0x004400} shininess={100} />
            </mesh>
            <mesh position={[0, -1.5, 0]}>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshPhongMaterial color={0xffff00} emissive={0x444400} shininess={100} />
            </mesh>
            *
            *
            * */

/*<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <fog attach="fog" args={['#100E02', 0, 80]} />
            <Torus radius={1.5} color={'yellow'}/>
<Svg size={1.5} src={reactIcon} color={'yellow'}/>
<Cloud count={closestCount} radius={16} />
<TrackballControls />
</Canvas>*/