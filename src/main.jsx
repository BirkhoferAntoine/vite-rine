import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CssBaseline} from "@mui/material";
import {DefaultThemeProvider} from "./themes/DefaultThemeProvider";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
/*import {Router} from "./react/Router";*/


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DefaultThemeProvider>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </DefaultThemeProvider>
    </React.StrictMode>,
)
