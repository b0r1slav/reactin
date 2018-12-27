import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../helpers';
import WordsNavItem from '../words/WordsNavItem';
import ExerciseResetButton from "./ExerciseResetButton";
import '../words/WordsNav.css';

class ExerciseNav extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            visited: []
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
    
    handleClick = () => {
        let {visited} = this.state;
        
        visited.forEach(function(key) {
            localStorage.removeItem(key)
        });
        
        this.setState({ visited: [] });
    };
    
    addClassVisited = (id) => localStorage.getItem(`lesson${id}`) ? 'visited' : '';

    render() {
        
        const {data, visited} = this.state;
        const resetButton = visited.length ? <ExerciseResetButton handler={this.handleClick} /> : null;
        const result = data.map(entry => (
            <WordsNavItem
                key={entry.id}
                id={entry.id}
                className={this.addClassVisited(entry.id)}
                url={`/lessons/${entry.id}`}
                content={entry.title}
            />)
        );

        return (
            <div className="container">
                <div className="main">
                    {resetButton}
                    <ol id="wordsNavList">{result}</ol>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let local = Object.keys(localStorage);
        let lessons = local.filter(function(key) {
            return key.includes('lesson');
        });
        this.setState({
            visited: lessons
        });
        
        this.getData();
    }
}

export default ExerciseNav;