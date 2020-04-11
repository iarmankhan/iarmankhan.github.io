import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";

import './css/index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));

serviceWorker.unregister();
