import React, { Component } from 'react';
import WordsNavItem from './words/WordsNavItem';

class AppNav extends Component {

    render() {
        
        const result = [
            <WordsNavItem key={1} item={{url: `/lessons`, content: 'Lessons'}} />,
            <WordsNavItem key={2} item={{url: `/words`, content: 'Words'}} />
            ];

        return (
            <div className="container">
                <div className="main">
                    <ol id="wordsNavList">{result}</ol>
                </div>
            </div>
        )
    }
}
export default AppNav;