import React, { Component } from 'react';
import WordsNavItem from '../words/WordsNavItem';

class CompetitionNav extends Component {

    render() {
        
        const items = [
            <WordsNavItem key={1} url='/competition/1' content='Level One' />
        ];

        return (
            <div className="container">
                <div className="main">
                    <ol id="wordsNavList">{items}</ol>
                </div>
            </div>
        )
    }
}
export default CompetitionNav;