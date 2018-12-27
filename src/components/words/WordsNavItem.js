import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WordsNavItem extends Component {

    render() {
        let {url, content, id} = this.props;
        let className = this.props.className ? this.props.className : '';

        return (
            <li className={className}>
                <Link
                    to={url}
                    data-id={id}>
                    {content}
                </Link>
            </li>
        );
    }
}

export default WordsNavItem;