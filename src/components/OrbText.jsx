import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

const OrbText = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const scene     = new THREE.Scene();
        const camera    = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer  = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const radius    = 200;
        const geometry  = new THREE.SphereGeometry(radius, 50, 50);
        const material  = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const sphere    = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        const loader = new FontLoader();
        loader.load('src/assets/helvetiker_bold.typeface.json', (font) => {
            const textGeometry = new TextGeometry('Hello World!', {
                font: font,
                size: 10,
                height: 1,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 1,
                bevelSize: 0.5,
                bevelSegments: 3
            });

            console.log("-> font", font);

            if (textGeometry.vertices !== undefined) {
                // access textGeometry.vertices here
                const textMaterial  = new THREE.MeshStandardMaterial({ color: 0xffffff });
                const textMesh      = new THREE.Mesh(textGeometry, textMaterial);

                // Distribute text in sphere
                for (let i = 0, l = textGeometry.vertices.length; i < l; i++) {
                    const vector = new THREE.Vector3();
                    vector.x = (Math.random() * 2 - 1) * radius;
                    vector.y = (Math.random() * 2 - 1) * radius;
                    vector.z = (Math.random() * 2 - 1) * radius;

                    if (vector.length() < radius) {
                        textGeometry.vertices[i].copy(vector);
                    }
                }

                scene.add(textMesh);
            } else {
                console.log("-> textGeometry", textGeometry);
                textGeometry.computeBoundingBox();

                const centerOffset = - 0.5 * ( textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x );
                const materials = [
                    new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
                    new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
                ];
                const textMesh1 = new THREE.Mesh( textGeometry, materials );
                const hover = 30;
                textMesh1.position.x = centerOffset;
                textMesh1.position.y = hover;
                textMesh1.position.z = 0;

                textMesh1.rotation.x = 0;
                textMesh1.rotation.y = Math.PI * 2;

                scene.add(textMesh1);

                /*const textGeometry = new THREE.BufferGeometry();
                const textMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});

                const fontLoader = new FontLoader();
                fontLoader.load(helvetiker, (font) => {
                    const text = 'Hello, world!';
                    const textBufferGeometry = new THREE.TextBufferGeometry(text, {
                        font: font,
                        size: 10,
                        height: 1,
                        curveSegments: 12,
                        bevelEnabled: false,
                    });

                    textBufferGeometry.computeBoundingBox();
                    const textWidth = textBufferGeometry.boundingBox.max.x - textBufferGeometry.boundingBox.min.x;

                    textGeometry.setAttribute('position', textBufferGeometry.getAttribute('position'));
                    textGeometry.setIndex(textBufferGeometry.getIndex());
                    textGeometry.computeBoundingBox();

                    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
                    textMesh.position.set(-textWidth / 2, 0, 0);
                });*/
            }
        });
        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        camera.position.z = 500;

        const animate = () => {
            requestAnimationFrame(animate);

            sphere.rotation.x += 0.005;
            sphere.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} />;
};

export default OrbText;
