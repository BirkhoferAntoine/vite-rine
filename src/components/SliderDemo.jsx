import React, {Component} from 'react';
import {Box} from "@mui/material";

class SliderDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const frizliveImages = [
            'src/assets/pexels-antoni-shkraba-7507067-removebg-preview.png',
            'src/assets/pexels-jonathan-nenemann-13434458-removebg-preview.png',
            'src/assets/pexels-antoni-shkraba-7507067-removebg-preview.png',
            'src/assets/pexels-jonathan-nenemann-13434458-removebg-preview.png',
        ];


        return (
            <Box className={'work-slider-container filter-highlight shadow-highlight backdrop-filter-blur'}>
                <Box className={'work-slider'}>
                    <Box className={'work-slider-wrapper filter-blur'}>
                        <Box sx={{position: 'absolute', width: '100%', height:'100%', border: '4px solid transparent', background:'url("src/assets/planet-581239_1280.jpg")'}}></Box>
                        {frizliveImages.map((element, index) => (
                            <img className={'slider-image'} src={element} key={'slider-image-'+index}/>
                        ))}
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default SliderDemo;