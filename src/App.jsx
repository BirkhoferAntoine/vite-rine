import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './components/pages/Homepage.jsx';
import { DefaultLayout } from './components/layout/DefaultLayout.jsx';
import { NotFound } from './components/pages/NotFound.jsx';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />} errorElement={<NotFound />}>
                    <Route
                        exact
                        path={'/'}
                        element={<Homepage />}
                        errorElement={<NotFound />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
