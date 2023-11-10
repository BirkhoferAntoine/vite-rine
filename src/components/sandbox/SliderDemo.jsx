import React, { Component } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

class SliderDemo extends Component {
    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
        this.slidesRef = React.createRef();
    }

    componentDidMount() {
        const slider = this.sliderRef.current;
        const slides = this.slidesRef.current.children;

        /*gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.tl({
            scrollTrigger: {
                trigger: slider,
                start: "top 80%",
                end: "bottom top",
                scrub: true,
                markers: true,
            },
        });
        
        tl.to(slides, {
            xPercent: -100 * (slides.length - 1),
            duration: slides.length * 3,
            ease: 'bounce',
        });*/
    }

    render() {
        const frizliveImages = [
            'src/assets/pexels-antoni-shkraba-7507067-removebg-preview.png',
            'src/assets/pexels-jonathan-nenemann-13434458-removebg-preview.png',
            'src/assets/pexels-antoni-shkraba-7507067-removebg-preview.png',
            'src/assets/pexels-jonathan-nenemann-13434458-removebg-preview.png',
            'src/assets/pexels-antoni-shkraba-7507067-removebg-preview.png',
            'src/assets/pexels-jonathan-nenemann-13434458-removebg-preview.png',
        ];

        return (
            <Box
                className={
                    'work-slider-container filter-highlight shadow-highlight backdrop-filter-blur'
                }
            >
                <Box className={'work-slider'}>
                    <Box
                        ref={this.sliderRef}
                        className={'work-slider-wrapper filter-blur'}
                    >
                        <Box
                            ref={this.slidesRef}
                            className={'work-slider-background'}
                        />{' '}
                        {/*sx={{position: 'absolute', width: '100%', height:'100%', border: '4px solid transparent', background:'url("src/assets/planet-581239_1280.jpg")'}}*/}
                        {frizliveImages.map((element, index) => (
                            <img
                                className={'slider-image'}
                                src={element}
                                key={'slider-image-' + index}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default SliderDemo;
