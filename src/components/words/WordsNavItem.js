import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WordsNavItem extends Component {

    render() {
        let {url, content, id} = this.props;
        let answer = this.props.answer || []; 
        let info = this.props.quantity ? <span className="score">{answer.length}/{this.props.quantity}</span> : null;
        let className = this.props.className || '';

        return (
            <li className={className}>
                <Link
                    to={url}
                    data-id={id}>
                    {content}
                </Link>
                {info}
            </li>
        );
    }
}

export default WordsNavItem;