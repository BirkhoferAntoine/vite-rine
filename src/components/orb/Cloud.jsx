import {useMemo, useState, useEffect} from "react";
import * as THREE from "three";
import Word from "./Word.jsx";

export const Cloud = ({skillList, handleOrbTextClick, }) => {
    const [radius, setRadius] = useState(16);
    const [count, setCount] = useState(0);
    const noClick = skillList.includes('../Back');

    useEffect(() => {
        setCount(Math.ceil(Math.sqrt(skillList.length)));
        count > 9 ? setRadius(20) : setRadius(16);
    }, [skillList]);

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
    }, [count, radius, skillList]);
    //return words.map(([pos, word], index) => <SvgIcon key={'svg-'+index} position={pos} src={word}/>)
    return words.map(([pos, word], index) => {
        return <Word key={'orb-word-'+index}
                     {...((!noClick || word === '../Back') && {handleOrbTextClick:handleOrbTextClick})}
                     position={pos}
                     children={word}/>
    })
}