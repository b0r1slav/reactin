import React, { Component } from 'react';
import axios from 'axios';
import { url, getModuleVersion } from '../../helpers';
import WordsNavItem from '../words/WordsNavItem';
import ExerciseResetButton from "./ExerciseResetButton";
import '../words/WordsNav.css';

class ExerciseNav extends Component {
    
    constructor(props) {
        super(props);

        this.module = 'exercises';
        this.state = {
            data: [],
            visited: []
        };
    }
    
    getData = () => {
        
        const uri = url('/lessons');
        const storageVersion = parseFloat( localStorage.getItem(`${this.module}Version`) );
        const appVersion = getModuleVersion(this.module);
        const exercisesNav = JSON.parse( localStorage.getItem(`${this.module}Nav`) );
        
        if ( storageVersion && storageVersion === appVersion && exercisesNav ) {
            
            this.setState({
                data: exercisesNav
            });
        } else {
            axios.get(uri)
                .then(result => {
                    this.setExercisesNav(appVersion, result.data);
                
                    this.setState({
                        data: result.data
                    });
                });
        }
        
    };
    
    setExercisesNav = (appVersion, exercisesNav) => {
        localStorage.setItem(`${this.module}Version`, appVersion);
        localStorage.setItem( `${this.module}Nav`, JSON.stringify(exercisesNav) );
    };
    
    setVisited = () => {
        let local = Object.keys(localStorage);
        let lessons = local.filter(function(key) {
            return key.includes('lesson');
        });
        
        this.setState({
            visited: lessons
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
    
    handleAnswer = (id) => {
        let answer = [];
        let item = localStorage.getItem(`lesson${id}`);
        
        if (item) {
            let data = JSON.parse(item);
            
            answer = Object.keys(data).filter(function(key){
                return key.indexOf('answer') > -1;
            });
        }
        
        return answer;
    };

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
                quantity={entry.quantity}
                answer={this.handleAnswer(entry.id)}
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
        this.setVisited();
        this.getData();
    }
}

export default ExerciseNav;