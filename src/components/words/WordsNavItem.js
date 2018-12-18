import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WordsNavItem extends Component {

    render() {
        let {item} = this.props;

        return (
            <li>
                <Link
                    to={item.url}>
                    {item.content}
                </Link>
            </li>
        );
    }
}

export default WordsNavItem;