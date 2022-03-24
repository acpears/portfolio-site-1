import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

// import 'foundation-sites/dist/css/foundation.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './css/index.css'
import './css/fonts.css'




import App from './App.js'


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('app'));