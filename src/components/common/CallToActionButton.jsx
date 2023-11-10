import React from 'react';
import { Button } from '@mui/material';

const sxStyles = {
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', //'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
};
const CallToActionButton = ({ callback, children }) => {
    return (
        <Button sx={sxStyles.button} onClick={callback} variant={'contained'}>
            {children}
        </Button>
    );
};

export default CallToActionButton;
