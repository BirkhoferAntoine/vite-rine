import React from 'react';
import './SmartphoneMockup.css';
import {Box, Button, Paper} from "@mui/material";
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';

const SmartphoneMockup = () => {

    const handleContactButton = () => {
        window.open('mailto:birkhoferantoine@gmail.com', '_blank');
    }

    return (
        <Paper className="smartphone">

            <Box className="smartphone-top-bar">
                <Box className="smartphone-notch"></Box>
            </Box>
            <Box className="smartphone-screen">
                <Box className="smartphone-navbar">Navbar</Box>
                <Box className="smartphone-content">
                    <Button className="smartphone-contact-button" onClick={handleContactButton}>Contact Me</Button>
                </Box>
                <Box className="smartphone-footer">Footer</Box>
            </Box>
            <Box className="smartphone-ui-bottom-bar">
                <Box className="smartphone-ui-button home-button"></Box>
                <Box className="smartphone-ui-button side-button-left"></Box>
                <Box className="smartphone-ui-button side-button-right"></Box>
            </Box>
            {/*<Box className="smartphone-notch"></Box>

            <Box className="smartphone-screen">
                <Box className="smartphone-navbar">Navbar</Box>
                <Button className="smartphone-contact-button" onClick={handleContactButton}>Contact Me</Button>
                <Box className="smartphone-footer">footer</Box>
            </Box>*/}

        </Paper>
    );
}

export default SmartphoneMockup;