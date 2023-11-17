import React, { forwardRef } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const hardcoreCTA = {
    position: 'relative',
    background:
        'linear-gradient(45deg, var(--color-secondary), var(--color-primary) 60%, var(--color-secondary))',
    padding: '0 30px',
    border: '2px solid var(--red-carnelian)',
    borderRadius: '50px',
};

const softCTA = {
    position: 'relative',
    background: 'transparent',
    padding: '0 30px',
    border: '2px solid var(--color-primary)',
    borderRadius: '50px',
};

const sxStyles = {
    button: softCTA,
    text: {
        fontSize: '20pt',
        fontWeight: 'bold',
        color: 'f6f4eb',
    },
};

export const CallToActionButton = forwardRef(function (
    { callback, href, children },
    ref
) {
    if (href) {
        return (
            <Link
                ref={ref}
                sx={sxStyles.button}
                to={href}
                variant={'contained'}
                color={'inherit'}
                className={'call-to-action-btn box-highlight'}
            >
                <Typography sx={sxStyles.text}>{children}</Typography>
            </Link>
        );
    }

    return (
        <Button
            ref={ref}
            sx={sxStyles.button}
            onClick={callback}
            variant={'contained'}
            color={'inherit'}
            className={'call-to-action-btn box-highlight'}
        >
            <Typography sx={sxStyles.text}>{children}</Typography>
        </Button>
    );
});

export default CallToActionButton;
