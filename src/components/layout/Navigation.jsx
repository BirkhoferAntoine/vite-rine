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
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import {Link} from "react-router-dom";
import Stepper from "./NavigationStepper.jsx";
import SocialMediaBox from "./SocialMediaBox.jsx";
import Logo from "./Logo.jsx";

export const Navigation = () => {
    //styles
    const theme = useTheme();
    const sxStyles = {
        menuIcon: {
            display: 'none',
            marginRight: {xs:1, md:2},
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

    const hideSocialOnMobile = true;

    return (
        <>
            <AppBar position={'fixed'} sx={sxStyles.header}>
                <Toolbar sx={sxStyles.toolbar}>
                    <IconButton onClick={toggleDrawer} sx={sxStyles.menuIcon} edge={'start'}><MenuIcon/></IconButton>
                    <Box sx={{width: '100%', maxWidth: '100vw', display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', position: {xs:'fixed', md:'relative'}, ml:{xs:-1, lg:0}}} >
                        <Logo image={false}/> {/*'src/assets/abrkah_transparent_background_with_a_beautifull_logo_for_a_webs_13f86818-dc0e-4d82-8029-ea22dbcfe68f.png'*/}
                        <Box flexGrow={1} sx={{display: {xs: 'none', md: 'block'}}}  />
                        <SocialMediaBox hideOnMobile={hideSocialOnMobile}/>
                        <Box sx={{ml: '4em', mr:'4em', display: {xs:'none', md:'flex'}, flexDirection:'row', width:'60px', alignItems:'center', justifyContent:'space-between'}}>
                            <LocationOnSharpIcon/>
                            <Typography className={'text-outline-yellow filter-highlight'}>Paris</Typography>
                        </Box>
                    </Box>



                </Toolbar>
                <Drawer anchor={'left'} variant={'temporary'}
                        onClose={toggleDrawer} onClick={toggleDrawer} open={drawerOpen}>
                    <Stepper/>
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

        </>
    );
}