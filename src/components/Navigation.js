import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

class Navigation extends Component {

    handleClick = event => {
        if (/\/lessons/.test(window.location.href)) {
            event.preventDefault();
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    };

    render() {

        return (
            <div className="header">
                <Link
                    className="active"
                    to="/lessons"
                    onClick={this.handleClick}>
                    Lessons
                </Link>
            </div>
        );
    }
}
export default Navigation;