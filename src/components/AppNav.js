import React, { Component } from 'react';
import WordsNavItem from './words/WordsNavItem';

class AppNav extends Component {

    render() {
        
        const items = [
            <WordsNavItem key={1} item={{url: `/lessons`, content: 'Lessons'}} />,
            <WordsNavItem key={2} item={{url: `/words`, content: 'Words'}} />,
            <WordsNavItem key={3} item={{url: `/phrases`, content: 'Phrases'}} />
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
export default AppNav;