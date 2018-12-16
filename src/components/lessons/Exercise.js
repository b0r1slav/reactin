import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../helpers';
import '../../css/Exercise.css';
import ExerciseResetButton from "./ExerciseResetButton";
import ExerciseItem from "./ExerciseItem";

class Exercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            localData: {}
        };
    }

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

    //~ componentWillReceiveProps(nextProps) {
        //~ if (nextProps.lessonId !== this.props.lessonId) {
            //~ this.getData(nextProps.lessonId);
            //~ this.getLocalStorage(nextProps.lessonId);
        //~ }
    //~ }

    getData = (lessonId = 1) => {

        const uri = url('exercises/' + lessonId);

        axios.get(uri)
            .then(result => {
                this.setState({
                    data: result.data
                })
            });
    };

    render() {

        const {data, localData} = this.state;
        const isLocalData = Object.keys(localData).length;
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
                { isLocalData ? <ExerciseResetButton handler={this.handleClick} /> : null}
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