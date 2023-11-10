import '@csstools/normalize.css';
import 'sanitize.css';
import 'sanitize.css/forms.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { DefaultThemeProvider } from './themes/DefaultThemeProvider';
// import { DevSupport } from '@react-buddy/ide-toolbox';
// import { ComponentPreviews, useInitial } from './dev';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DefaultThemeProvider>
            <App />
        </DefaultThemeProvider>
    </React.StrictMode>
);

/*
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
            */
