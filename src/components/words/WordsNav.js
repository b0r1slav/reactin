import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../helpers';
import WordsNavItem from './WordsNavItem';
import ExerciseResetButton from "../lessons/ExerciseResetButton";
import './WordsNav.css';

class WordsNav extends Component {
    
    constructor(props) {
        super(props);

        this.module = 'words';
        this.dataUrl = '/words/1';
        this.state = {
            rowsCount: [],
            visited: []
        };
        
        this.getData = this.getData.bind(this);
    }

    getData = () => {

        const uri = url(this.dataUrl);

        axios.get(uri)
            .then(result => {
                this.setState({
                    rowsCount: result.data.rows.rowsCount
                })
            });
    };
    
    handleClick = () => {
        let {visited} = this.state;
        
        localStorage.removeItem(this.module);
        
        this.setState({ visited: [] });
    };
    
    addClassVisited = id => this.state.visited.indexOf(id) > -1 ? 'visited' : '';

    render() {
        const {rowsCount, visited} = this.state;
        const elements = [];
        const items = Math.ceil(rowsCount / 20);
        const resetButton = visited.length ? <ExerciseResetButton handler={this.handleClick} /> : null;
        
        for (let i = 1; i <= items; i++) {
            elements.push(<WordsNavItem 
                            key={i}
                            className={this.addClassVisited(i)} 
                            url={`/${this.module}/${i}`} 
                            content={`Lesson ${i}`} />
            );
        }

        return (
            <div className="container">
                <div className="main">
                    {resetButton}
                    <ol id="wordsNavList">{elements}</ol>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getData();
        const local = localStorage.getItem(this.module);
        const visited = local ? JSON.parse(local) : [];
        this.setState({
            visited: visited
        });
    }
}

export default WordsNav;