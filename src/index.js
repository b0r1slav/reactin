import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';


ReactDOM.render(
    (
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    ),
    document.getElementById('root')
);