import React, {Fragment} from "react";
import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate, Outlet,
    Route,
    RouterProvider,
    Routes
} from "react-router-dom";
import {Homepage} from "./components/Homepage.jsx";
import {DefaultLayout} from "./components/DefaultLayout";
import {NotFound} from "./components/NotFound.jsx";
import './App.css'


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout/>}
                       errorElement={<NotFound/>}
                >
                    <Route exact path={'/'}
                           element={<Homepage/>}
                           errorElement={<NotFound/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

