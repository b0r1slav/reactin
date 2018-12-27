import React, { Component } from 'react';
import WordsNavItem from './words/WordsNavItem';

class AppNav extends Component {

    render() {
        
        const items = [
            <WordsNavItem key={1} url='/lessons' content='Lessons' />,
            <WordsNavItem key={2} url='/words' content='Words' />,
            <WordsNavItem key={3} url='/phrases' content='Phrases' />
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