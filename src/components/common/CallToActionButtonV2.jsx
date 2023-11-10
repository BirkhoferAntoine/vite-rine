import React, { forwardRef } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const sxStyles = {
    position: 'relative',
    background:
        'linear-gradient(45deg, var(--color-secondary),var(--color-primary) 60%,var(--color-secondary))',
    color: 'white', //#fcd-81-c,
    padding: '0 30px',
    border: '2px solid var(--red-carnelian)',
    borderRadius: '50px',
};

export const CallToActionButton = forwardRef(function (
    { callback, href, children },
    ref
) {
    if (href) {
        return (
            <Link
                ref={ref}
                sx={sxStyles}
                to={href}
                variant={'contained'}
                className={'call-to-action-btn box-highlight'}
            >
                <Typography sx={{ fontSize: '20pt', fontWeight: 'bold' }}>
                    {children}
                </Typography>
            </Link>
        );
    }

    return (
        <Button
            ref={ref}
            sx={sxStyles}
            onClick={callback}
            variant={'contained'}
            className={'call-to-action-btn box-highlight'}
        >
            <Typography sx={{ fontSize: '20pt', fontWeight: 'bold' }}>
                {children}
            </Typography>
        </Button>
    );
});

export default CallToActionButton;
