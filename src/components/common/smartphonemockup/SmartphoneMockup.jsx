import React from "react";
import "./SmartphoneMockup.css";
import {Box, Paper, Typography} from "@mui/material";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CropSquareRoundedIcon from "@mui/icons-material/CropSquareRounded";
import CallToActionButton from "../CallToActionButtonV2.jsx";
import SignalWifi4BarSharpIcon from '@mui/icons-material/SignalWifi4BarSharp';
import SignalCellular4BarSharpIcon from '@mui/icons-material/SignalCellular4BarSharp';
import BatteryChargingFullSharpIcon from '@mui/icons-material/BatteryChargingFullSharp';

const SmartphoneMockup = ({children, navbar, footer}) => {
    const handleContactButton = () => {
        window.open("mailto:birkhoferantoine@gmail.com", "_blank");
    };

    return (
        <Paper className="smartphone filter-highlight shadow-highlight" sx={{borderRadius:'1em'}}>
            <Box className="smartphone-screen">
                <Box className="smartphone-ui-top-bar">
                    <Typography>9:36</Typography>
                    <Box className="smartphone-notch"></Box>
                    <Box className="smartphone-ui-status">
                        <SignalWifi4BarSharpIcon fontSize={'inherit'}/>
                        <SignalCellular4BarSharpIcon fontSize={'inherit'}/>
                        <BatteryChargingFullSharpIcon fontSize={'inherit'}/>
                    </Box>
                </Box>
                <Box className="smartphone-navbar">{navbar}</Box>
                <Box className="smartphone-content">
                    {children}
                </Box>
                <Box className="smartphone-footer">{footer}</Box>
            </Box>
            <Box className="smartphone-ui-bottom-bar">
                <Box className="smartphone-ui-button home-button">
                    <MenuRoundedIcon fontSize={'inherit'}/>
                </Box>
                <Box className="smartphone-ui-button side-button-left">
                    <CropSquareRoundedIcon fontSize={'inherit'}/>
                </Box>
                <Box className="smartphone-ui-button side-button-right">
                    <KeyboardArrowLeftRoundedIcon fontSize={'inherit'}/>
                </Box>
            </Box>
            {/*<Box className="smartphone-notch"></Box>

            <Box className="smartphone-screen">
                <Box className="smartphone-navbar">Navbar</Box>
                <Button className="smartphone-contact-button" onClick={handleContactButton}>Contact Me</Button>
                <Box className="smartphone-footer">footer</Box>
            </Box>*/}
        </Paper>
    );
};

export default SmartphoneMockup;
