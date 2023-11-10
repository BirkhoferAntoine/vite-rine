import React from 'react';
import { forwardRef, useContext } from 'react';
import { SkillsContext } from '../../context/skills.context.jsx';
import { Canvas } from '@react-three/fiber';
import { TrackballControls } from '@react-three/drei';
import { Cloud } from './Cloud.jsx'; //  Sphere, Torus,

export const OrbTextThree = forwardRef(function OrbTextThree(props, ref) {
    const skillListObject = useContext(SkillsContext);
    const { skillsArray, setSkillsArray } = useContext(SkillsContext);

    const randomWord = (wordArray) => {
        return wordArray[Math.floor(Math.random() * props.skillList.length)];
    };

    return (
        <Canvas
            ref={ref}
            dpr={[1, 2]}
            camera={{ position: [0, 0, 36], fov: 90 }}
            className={'orb-canvas-container'}
        >
            <Cloud
                skillList={skillsArray}
                handleOrbTextClick={props.handleOrbTextClick}
            />
            <TrackballControls />
        </Canvas>
    );
});

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

/*const SvgIcon = ({ src, children, ...props }) => {
    const ref = useRef();

    console.log('-> ');
    const [hovered, setHovered] = useState(false);

    const color = new THREE.Color();
    const fontProps = {};

    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

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

    const image = new Image();
    image.src = src;

    if (image.height) {
        const ratio = 16 / image.height;
        return (
            <Svg
                src={src}
                scale={ratio}
                fillMaterial={{ color: '#FCD81C' }}
                ref={ref}
                /!*onPointerOver={over} onPointerOut={out}*!/ onClick={() =>
                    console.log('clicked')
                }
                {...props}
                children={children}
            />
        );
    }
};

const svgList = [
    'src/assets/icons/react.svg',
    'src/assets/icons/symfony.svg',
    'src/assets/icons/devicons-master/!SVG/javascript_1.svg', //'src/assets/icons/javascript_icon_130900.svg',
    'src/assets/icons/devicons-master/!SVG/php.svg',
    'src/assets/icons/devicons-master/!SVG/html5.svg',
    'src/assets/icons/file_type_css_icon_130661.svg',
    'src/assets/icons/devicons-master/!SVG/linux.svg',
    'src/assets/icons/devicons-master/!SVG/laravel.svg',
    'src/assets/icons/Three.js_Icon.svg',
    'src/assets/icons/devicons-master/!SVG/git.svg',
    'src/assets/icons/devicons-master/!SVG/mysql.svg',
    'src/assets/icons/devicons-master/!SVG/postgresql.svg',
    'src/assets/icons/figma.svg',
    'src/assets/icons/phpstorm-seeklogo.com.svg',
    'src/assets/icons/ffmpeg-seeklogo.com.svg',
    'src/assets/icons/next-js-seeklogo.com.svg',
];*/
