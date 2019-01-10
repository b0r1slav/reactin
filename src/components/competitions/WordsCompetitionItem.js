import React, { Component } from 'react';

class WordsCompetitionItem extends Component {

    render() {
        
        let trans = this.props.data.transcription ? `[${this.props.data.transcription}]` : '',
            inputValue = this.props.inputData[this.props.data.id] || '',
            userAnswer = inputValue.trim().toLowerCase(),
            {en} = this.props.data,
            answer = (<details><summary>Answer</summary><p>{en} {trans}</p></details>),
            notification = userAnswer === en ? (<p className="correctAnswer"><i>Correctly!</i></p>) : null;

        return (
            <li>
                {this.props.data.bg}
                <input
                    type="text"
                    data-id={this.props.data.id}
                    value={inputValue}
                    onChange={this.props.handleOnChange} 
                />
                {notification}
                {answer}
            </li>
        );
    }
}

export default WordsCompetitionItem;