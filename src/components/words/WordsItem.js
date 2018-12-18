import React, { Component } from 'react';

class WordsItem extends Component {

    render() {

        let trans = this.props.data.transcription ? `[${this.props.data.transcription}]` : '';

        return (
            <li>
                {this.props.data.bg}
                <details>
                    <summary>Answer</summary>
                    <p>{this.props.data.en} {trans}</p>
                </details>
            </li>
        );
    }
}

export default WordsItem;