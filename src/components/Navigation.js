import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navigation.css';

class Navigation extends Component {
    
    handleClick() {
        let nav = document.getElementById("navBar");
        if (nav.className === "header") {
            nav.className += " responsive";
        } else {
            nav.className = "header";
        }
}

    render() {

        return (
            <div className="header" id="navBar">
                <NavLink
                    activeClassName="active"
                    to="/lessons"
                >
                    Lessons
                </NavLink>
                <NavLink activeClassName="active" to="/words">Words</NavLink>
                <a className="icon" onClick={this.handleClick}>
                    &equiv;
                </a>
            </div>
        );
    }
}
export default Navigation;