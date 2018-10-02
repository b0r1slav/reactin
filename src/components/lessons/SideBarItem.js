import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeClasses } from "../../helpers";

class SideBarItem extends Component {

    render() {
        let {entry, activeClassName, handleClick} = this.props;

        return (
            <Link
                to={`/lessons/${entry.id}`}
                className={makeClasses(activeClassName)}
                onClick={handleClick}>
                {entry.title}
            </Link>
        )
    }
}
export default SideBarItem;