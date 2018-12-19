import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../helpers';
import WordsNavItem from '../words/WordsNavItem';
import '../words/WordsNav.css';

class ExerciseNav extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }
    
    getData = () => {
        
        const uri = url('/lessons');

        axios.get(uri)
            .then(result => {
                this.setState({
                    data: result.data
            })
        });
        
    };

    render() {
        
        const {data} = this.state;
        const result = data.map(entry => (
            <WordsNavItem
                key={entry.id}
                item={{url: `/lessons/${entry.id}`, content: entry.title}}
            />)
        );

        return (
            <div className="container">
                <div className="main">
                    <ol id="wordsNavList">{result}</ol>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getData();
    }
}

export default ExerciseNav;