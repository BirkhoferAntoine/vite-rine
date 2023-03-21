import React from 'react';
import {Box, IconButton, useTheme} from "@mui/material";
import { SiGithub, SiWhatsapp, SiGmail, SiSkype } from "react-icons/si";

const SocialMediaBox = () => {

    const theme = useTheme();

    const sxStyles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(2),
            borderRadius: theme.spacing(2),
            maxWidth: '400px',
            margin: '0 auto',
        },
        iconButton: {
            color: 'var(--color-primary)',
            padding: theme.spacing(1),
        }
    };

    return (
        <Box sx={sxStyles.container}>
            <IconButton aria-label="whatsapp" sx={sxStyles.iconButton} className={'text-outline-yellow filter-highlight'}>
                <SiWhatsapp />
            </IconButton>
            <IconButton aria-label="github" sx={sxStyles.iconButton} className={'text-outline-yellow filter-highlight'}>
                <SiGithub />
            </IconButton>
            <IconButton aria-label="gmail" sx={sxStyles.iconButton} className={'text-outline-yellow filter-highlight'}>
                <SiGmail />
            </IconButton>
            <IconButton aria-label="skype" sx={sxStyles.iconButton} className={'text-outline-yellow filter-highlight'}>
                <SiSkype />
            </IconButton>
        </Box>
    );
};

export default SocialMediaBox;
