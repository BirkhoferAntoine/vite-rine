import {useMemo} from "react";
import * as THREE from "three";
import Word from "./Word.jsx";

export const Cloud = ({ count = 4, radius = 20, skillList, handleOrbTextClick}) => {
    // Create a count x count random words with spherical distribution

    console.log("=>(OrbTextThree.jsx:204) skillList", skillList);

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
    //return words.map(([pos, word], index) => <SvgIcon key={'svg-'+index} position={pos} src={word}/>)
    return words.map(([pos, word], index) => {
        return <Word key={'orb-word-'+index} position={pos} handleOrbTextClick={handleOrbTextClick} children={word}/>
    })
}