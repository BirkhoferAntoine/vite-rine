import {Navigation} from "./Navigation.jsx";
import React, {Fragment} from "react";
import {styled} from "@mui/material";
import {Outlet} from "react-router-dom";
import LightbulbLayout from "../background/LightbulbLayout.jsx";
import HighlightGeometry from "../background/HighlightGeometry.jsx";


//const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
const Offset = styled('div')({minHeight: 'var(--header-height)'});
export const DefaultLayout = () => {
    return (
        <Fragment>
            <Navigation/>
            <Offset/>
            {/*<LightbulbLayout/>*/}
            {/*<HighlightGeometry/>*/}
            <main>
                <Outlet/>
            </main>
        </Fragment>
    );
}