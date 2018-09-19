import React from 'react';
import { Link } from 'react-router-dom';
import { makeClasses } from "../../helpers";


const NavLink = (itemData, itemClass) => {

    return (
        <Link
            key={itemData.id}
            to={`/lessons/${itemData.id}`}
            className={makeClasses(itemClass)} >
            {itemData.title}
        </Link>
    )
};

export default NavLink;