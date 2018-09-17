import React, { Component } from 'react';
import { url } from '../../helpers';
import '../../css/Exercise.css';


class Exercise extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            localData: {}
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.setLocalStorage = this.setLocalStorage.bind(this);
    }

    setLocalStorage = (exerciseId, exerciseValue) => {
        const lesson = 'lesson' + this.props.lessonId;
        let localExercises = {};

        if (localStorage.getItem(lesson)) {

            localExercises = JSON.parse(localStorage.getItem(lesson));
            localExercises[exerciseId] = exerciseValue;

            this.setState({
                localData: localExercises
            });

        } else {
            localExercises[exerciseId] = exerciseValue;

            this.setState({
                localData: localExercises
            });
        }

        localStorage.setItem(lesson, JSON.stringify(localExercises));
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

    handleOnChange = event => {
        // localStorage.removeItem('lesson' + this.props.lessonId);
        this.setLocalStorage(event.target.dataset.id, event.target.value)
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.lessonId !== this.props.lessonId) {
            this.getData(nextProps.lessonId);
            this.getLocalStorage(nextProps.lessonId);
        }
    }

    getData = (lessonId) => {

        const uri = url('exercises/' + lessonId);

        fetch(uri)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    };

    render() {

        const {data, localData} = this.state;

        const result = data.map((entry) => {
            return (
                <li key={entry.id}>
                    {entry.bg}
                    <input type="text" data-id={entry.id} value={localData[entry.id] || ''} onChange={this.handleOnChange} />
                    <details>
                        <summary>Answer</summary>
                        <p>{entry.en}</p>
                    </details>
                </li>
            );
        });

        return (
            <div className="main">
                <ol>{result}</ol>
            </div>
        )
    }

    componentDidMount() {
        this.getData(this.props.lessonId);
        this.getLocalStorage(this.props.lessonId);
    }
}

export default Exercise;