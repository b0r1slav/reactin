import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
    
    handleClick() {
        let nav = document.getElementById("navBar");
        
        if (nav.className === "header") {
            nav.className += " responsive";
        } else {
            nav.className = "header";
        }
    }
    
    handleClickUri() {
        let nav = document.getElementById("navBar");
        
        if ( nav.classList.contains("responsive") ) {
            nav.className = "header";
        }
    }

    render() {

        return (
            <div className="header" id="navBar">
                <NavLink
                    activeClassName="active"
                    onClick={this.handleClickUri}
                    to="/lessons">
                    Lessons
                </NavLink>
                <NavLink 
                    activeClassName="active" 
                    onClick={this.handleClickUri} 
                    to="/words">
                    Words
                </NavLink>
                <NavLink 
                    activeClassName="active" 
                    onClick={this.handleClickUri} 
                    to="/phrases">
                    Phrases
                </NavLink>
                <a className="icon" onClick={this.handleClick}>
                    &equiv;
                </a>
            </div>
        );
    }
}
export default Navigation;