import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../helpers';
import './Exercise.css';
import ExerciseResetButton from "./ExerciseResetButton";
import ExerciseItem from "./ExerciseItem";

class Exercise extends Component {
    constructor(props) {
        super(props);

        this.module = 'exercises';
        this.state = {
            data: [],
            localData: {}
        };
    }
    
    getData = (lessonId = 1) => {
        const uri = url(`/exercises/${lessonId}`);
        const localData = JSON.parse( localStorage.getItem(`${this.module}Data`) );
        const localKey = `lesson${lessonId}`;
        
        if ( localData && localData[localKey] ) {
            this.setState({
                    data: localData[localKey]
            });
        } else {
            axios.get(uri)
                .then(result => {
                    this.setLocalData(result.data, localKey, localData);
                    
                    this.setState({
                        data: result.data
                    });
                });
        }
    };
    
    setLocalData = (apiData, localKey, localData) => {
        if (localData) {
            localData[localKey] = apiData;
        } else {
            localData = {[localKey]: apiData};
        }
        
        localStorage.setItem( `${this.module}Data`, JSON.stringify(localData) );
    };

    setLocalStorage = () => {
        const lesson = 'lesson' + parseInt(this.props.match.params.id, 10);
        const {localData} = this.state;

        localStorage.setItem(lesson, JSON.stringify(localData));
    };

    getLocalStorage = lessonId => {
        const lesson = 'lesson' + lessonId;

        if (localStorage.getItem(lesson)) {
            let localExercises = JSON.parse(localStorage.getItem(lesson));

            this.setState({
                localData: localExercises
            });
        }
    };

    handleClick = () => {
        this.setState({
            localData: {}
        });
    };

    handleOnChange = event => {
        let {localData} = this.state;

        localData[event.target.dataset.id] = event.target.value;

        this.setState({
            localData: localData
        });
    };

    render() {

        const {data, localData} = this.state;
        const resetButton = Object.keys(localData).length ? <ExerciseResetButton handler={this.handleClick} /> : null;
        const result = data.map(entry => (
            <ExerciseItem
                key={entry.id}
                handleOnChange={this.handleOnChange}
                data={entry}
                localData={localData}
            />)
        );

        return (
            <div className="main">
                {resetButton}
                <ol>{result}</ol>
            </div>
        )
    }

    componentDidMount() {
        this.getData(parseInt(this.props.match.params.id, 10));
        this.getLocalStorage(parseInt(this.props.match.params.id, 10));
    }
    
    componentDidUpdate() {
        this.setLocalStorage();
    }
}

export default Exercise;