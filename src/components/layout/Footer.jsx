import React from 'react';
import { Box } from '@mui/material';
import SocialMediaBox from './SocialMediaBox.jsx';
import './DefaultLayout.css';

const sxStyles = {
    position: { xs: 'fixed', md: 'relative' },
    display: { xs: 'block', md: 'none' },
};

const Footer = () => {
    return (
        <Box sx={sxStyles} className="footer">
            <SocialMediaBox />
        </Box>
    );
};

export default Footer;
