import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';


class Navigation extends Component {

    render() {

        return (
            <div className="header">
                <Link className="active" to="/lessons">Lessons</Link>
            </div>
        );
    }
}

export default Navigation;