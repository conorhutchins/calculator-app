import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
createRoot(document.getElementById('root')).render(React.createElement(StrictMode, null,
    React.createElement(App, null)));