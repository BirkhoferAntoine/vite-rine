import React, {forwardRef} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
export const TextList = forwardRef(function TextList({textArray, onClick}, ref) {

    return (
        <Box ref={ref} sx={{ width: '100%', maxWidth: '100%', fontSize:'1.5rem', whiteSpace: 'pre-wrap'}} className={'skills-text typography-highlight'}>
            {textArray[0] === '../Back' && (
                <>
                    <nav aria-label="secondary back folders">
                        <List>
                            <ListItem disablePadding onClick={onClick}>
                                <ListItemButton sx={{paddingTop: {md: 0}, paddingBottom: {md: 0}}}>
                                    <ListItemText sx={{paddingTop: {md: 0}, paddingBottom: {md: 0}, fontSize:'2em'}} secondary="../Back" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                    <Divider />
                </>
            )}
            <nav aria-label="primary folders">
                <List>
                    {textArray.map((element, index) => {
                        return element !== '../Back' && (
                            <ListItem key={'text-box-list-item-'+index} disablePadding onClick={onClick}>
                                <ListItemButton sx={{paddingTop: {md: 0}, paddingBottom: {md: 0}}}>
                                    <ListItemText primary={element} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </nav>
        </Box>
    );
});

