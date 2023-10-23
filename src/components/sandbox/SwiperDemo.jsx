import React, {Component} from 'react';
import {Box} from "@mui/material";
import gsap from 'gsap';

class SwiperDemo extends Component {
    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
        this.slidesRef = React.createRef();
    }

    componentDidMount() {
        const slider = this.sliderRef.current;
        const slides = this.slidesRef.current.children;

        const timeline = gsap.timeline({ repeat: -1 });
        /*timeline.to(slides, {
            xPercent: 100,
            duration: 3,
            ease: 'bounce',
            onComplete: () => {
                this.slidesRef.current.appendChild(slides[0]);
                this.slidesRef.current.appendChild(slides[1]);
                this.slidesRef.current.appendChild(slides[2]);
            },
        });*/

        this.timeline = timeline;
    }

    componentWillUnmount() {
        this.timeline.kill();
    }

    render() {

        const sxStyles = {
            swiper: {
                width: '200vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            },
            wrapper: {
                background: 'none',
            }
        };

        const factoryImages = [
            'src/assets/pexels-antoni-shkraba-7507067-removebg-preview.png',
            'src/assets/pexels-jonathan-nenemann-13434458-removebg-preview.png',
            'src/assets/pexels-antoni-shkraba-7507067-removebg-preview.png',
        ];


        return (
            <Box sx={sxStyles.swiper} className={'bg-design-container-center'} ref={this.slidesRef}>
                {factoryImages.map((element, index) => (
                    <Box key={'swiper-container-'+index} className={'work-slider-container filter-highlight shadow-highlight backdrop-filter-blur'}>
                        <Box className={'work-slider'}>
                            <Box sx={sxStyles.wrapper} className={'work-slider-wrapper filter-blur'}>
                                <img className={'slider-image'} src={element} key={'swiper-image-'+index}/>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
    }
}

export default SwiperDemo;