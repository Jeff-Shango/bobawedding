import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';
Amplify.configure(config);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
