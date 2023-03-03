import React, {useState} from 'react';
// MUI COMPONENTS
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography, useTheme, styled
} from "@mui/material";
// ICONS
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import LabelIcon from '@mui/icons-material/Label';
import {Link} from "react-router-dom";
import Stepper from "./NavigationStepper.jsx";

export const Navigation = () => {
    //styles
    const theme = useTheme();
    const sxStyles = {
        menuIcon: {
            marginRight: 2,
        },
        drawerList: {
            width: '200px',
        },
        link: {
            textDecoration: 'none',
            color: theme.palette.text.primary,
            /*width: '100%',*/
        },
        header: {
            height: 'var(--header-height)',
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
        },
        toolbar: {
            height: 'var(--header-height)',
            backgroundColor: 'transparent',
        },
        textName: {
            fontFamily: 'Beth Ellen',
            fontSize: '2.3em',
            filter: 'drop-shadow(0px 0px 15px #FCD81C)',
        },
        textJob: {
            fontFamily: 'Jost',
            fontSize: '1.5em',
            filter: 'drop-shadow(0px 0px 15px #FCD81C)',
        }
    }
    const StyledLink = styled(Link)(({theme}) => sxStyles.link);

    //state
    const [drawerOpen, setDrawerOpen] = useState(false);
    //function
    const toggleDrawer = () => {
        return setDrawerOpen(!drawerOpen);
    }

    const drawerItems = [
        {
            text: 'To-do List',
            icon: <ListIcon/>,
            link: '/todo-list',
        },
        {
            text: 'Tags',
            icon: <LabelIcon/>,
            link: '/tag-list',
        },
    ]

    return (
        <>
            <AppBar position={'fixed'} sx={sxStyles.header}>
                <Toolbar sx={sxStyles.toolbar}>
                    <IconButton onClick={toggleDrawer} sx={sxStyles.menuIcon} edge={'start'}><MenuIcon/></IconButton>
                    <StyledLink to={'/'} width={'100%'}>
                        <Box className={'logo-container'}>
                            {/*<Box className={'logo-image-box'}>
                                <img src={'src/assets/image.png'} />
                            </Box>*/}
                            <Box className={'logo-title-box'}>
                                <Typography sx={sxStyles.textName} variant={'h5'} color={'textPrimary'}>
                                    Antoine Birkhofer
                                </Typography>
                                <Typography sx={sxStyles.textJob} variant={'h6'} color={'textPrimary'}>
                                    Web Developer
                                </Typography>
                            </Box>
                        </Box>
                    </StyledLink>
                    <Box flexGrow={1} />
                </Toolbar>
                <Drawer anchor={'left'} variant={'temporary'}
                        onClose={toggleDrawer} onClick={toggleDrawer} open={drawerOpen}>
                    <List sx={sxStyles.drawerList}>
                        {drawerItems.map(prop => (
                            <StyledLink to={prop.link} key={prop.text+'Link'}>
                                <ListItem button onClick={toggleDrawer}>
                                    <ListItemIcon>{prop.icon}</ListItemIcon>
                                    <ListItemText>{prop.text}</ListItemText>
                                </ListItem>
                            </StyledLink>
                        ))}
                    </List>
                </Drawer>
            </AppBar>
            <Stepper/>
        </>
    );
}