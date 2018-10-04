import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeClasses } from "../../helpers";

class SideBarItem extends Component {

    render() {
        let {entry, htmlClass, handleClick} = this.props;

        return (
            <Link
                to={`/lessons/${entry.id}`}
                className={makeClasses(htmlClass)}
                onClick={handleClick}>
                {entry.title}
            </Link>
        )
    }
}
export default SideBarItem;
