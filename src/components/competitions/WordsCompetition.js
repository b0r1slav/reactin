import React from 'react';
import Words from '../words/Words';
import WordsCompetitionItem from './WordsCompetitionItem';
import './WordsCompetition.css';

class WordsCompetition extends Words {
    constructor(props) {
        super(props);

        this.module = 'wordsCompetition';
        this.moduleUrl = '/words-competition/';
        this.itemsCount = 20;
        this.state = {
            data: [],
            inputData: {}
        };
    }
    
    handleOnChange = event => {
        let {inputData} = this.state;

        inputData[event.target.dataset.id] = event.target.value;

        this.setState({
            inputData: inputData
        });
    };
    
    render() {
        const {data, inputData} = this.state;
        
        const result = data.map(entry => (
            <WordsCompetitionItem
                key={entry.id}
                data={entry}
                inputData={inputData}
                handleOnChange={this.handleOnChange}
            />)
        );

        return (
            <div className="container">
                <div className="main">
                    <ol>{result}</ol>
                </div>
            </div>
        )
    }
}

export default WordsCompetition;