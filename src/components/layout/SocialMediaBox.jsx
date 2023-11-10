import React from 'react';
import { Box, IconButton, Link, styled, useTheme } from '@mui/material';
import { SiGithub, SiWhatsapp, SiGmail, SiLinkedin } from 'react-icons/si';

const SocialMediaBox = ({ hideOnMobile }) => {
    const theme = useTheme();

    const sxStyles = {
        container: {
            display: hideOnMobile ? { xs: 'none', md: 'flex' } : 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            /*padding: theme.spacing(2),*/
            borderRadius: theme.spacing(2),
            maxWidth: '400px',
            margin: '0 auto',
        },
        iconButton: {
            color: 'var(--color-primary)',
            padding: theme.spacing(1),
        },
        link: {
            textDecoration: 'none',
            color: theme.palette.text.primary,
            /*width: '100%',*/
        },
    };

    const StyledLink = styled(Link)(({ theme }) => sxStyles.link);

    return (
        <Box sx={sxStyles.container}>
            <StyledLink href='tel:+33636895151' sx={sxStyles.link}>
                <IconButton
                    aria-label='whatsapp'
                    sx={sxStyles.iconButton}
                    className={'text-outline-yellow filter-highlight'}
                >
                    <SiWhatsapp />
                </IconButton>
            </StyledLink>
            <StyledLink href='https://github.com/birkhoferantoine' target='_blank' rel='noopener noreferrer' sx={sxStyles.link}>
                <IconButton
                    aria-label='github'
                    sx={sxStyles.iconButton}
                    className={'text-outline-yellow filter-highlight'}
                >
                    <SiGithub />
                </IconButton>
            </StyledLink>
            <StyledLink href='https://linkedin.com/in/antoine-birkhofer' target='_blank' rel='noopener noreferrer' sx={sxStyles.link}>
                <IconButton
                    aria-label='linkedin'
                    sx={sxStyles.iconButton}
                    className={'text-outline-yellow filter-highlight'}
                >
                    <SiLinkedin />
                </IconButton>
            </StyledLink>
            <StyledLink href='mailto:birkhoferantoine@gmail.com' target='_blank' rel='noopener noreferrer' sx={sxStyles.link}>
            <IconButton
                aria-label='gmail'
                sx={sxStyles.iconButton}
                className={'text-outline-yellow filter-highlight'}
            >
                <SiGmail />
            </IconButton>
            </StyledLink>
        </Box>
    );
};

export default SocialMediaBox;
