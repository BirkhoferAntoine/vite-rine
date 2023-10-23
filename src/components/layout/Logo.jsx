import React from 'react';
import {Box, Typography} from "@mui/material";

const Logo = ({image}) => {
    const sxStyles = {
        textName: {
            fontFamily: 'Ibarra real novel',
            fontSize: '2.3em',
            filter: 'drop-shadow(0px 0px 15px #FCD81C)',
            marginBottom: '-0.5em',
        },
        textJob: {
            fontFamily: 'Jost',
            fontSize: '1.5em',
            filter: 'drop-shadow(0px 0px 15px #FCD81C)',
        }
    }

    return (
        <Box className={'logo-container'}>
            {image &&
                <Box className={'logo-image-box'}>
                    <img src={image}/>
                </Box>
            }
            <Box className={'logo-title-box logo'}>
                <Typography sx={sxStyles.textName} variant={'h5'} color={'textPrimary'}>
                    Antoine Birkhofer
                </Typography>
                <Typography sx={sxStyles.textJob} variant={'h6'} color={'textPrimary'}>
                    Web Developer
                </Typography>
            </Box>
        </Box>
    );
};

export default Logo;
