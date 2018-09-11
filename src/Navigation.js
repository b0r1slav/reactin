import React, {Component} from 'react';
import './Navigation.css';


class Navigation extends Component {

    render() {

        return (
            <div className="header">
                <a className="active" href="#lessons">Lessons</a>
            </div>
        );
    }
}

export default Navigation;