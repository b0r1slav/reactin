import React, { Component } from 'react';

class WordsItem extends Component {

    render() {

        return (
            <li>
                {this.props.data.bg}
                <details>
                    <summary>Answer</summary>
                    <p>{this.props.data.en}</p>
                </details>
            </li>
        );
    }
}

export default WordsItem;