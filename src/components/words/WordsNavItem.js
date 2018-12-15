import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WordsNavItem extends Component {

    render() {
        let {entry} = this.props;

        return (
            <li>
                <Link
                    to={`/words/${entry}`}>
                    Lesson {entry}
                </Link>
            </li>
        );
    }
}

export default WordsNavItem;