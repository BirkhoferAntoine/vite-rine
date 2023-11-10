import { Navigation } from './Navigation.jsx';
import React, { Fragment } from 'react';
import { styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
const Offset = styled('div')({ minHeight: 'var(--header-height)' });
export const DefaultLayout = () => {
    return (
        <Fragment>
            <Navigation />
            <Offset />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    );
};
