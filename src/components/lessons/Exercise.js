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
    }

    setLocalStorage = () => {
        const lesson = 'lesson' + this.props.lessonId;
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
                <li key={entry.id}>{entry.bg}
                    <input
                        type="text"
                        data-id={entry.id}
                        value={localData[entry.id] || ''}
                        onChange={this.handleOnChange} />
                    <details>
                        <summary>Answer</summary>
                        <p>{entry.en}</p>
                    </details>
                </li>
            );
        });

        return (
            <div className="main">
                <button onClick={this.handleClick}>reset</button>
                <ol>{result}</ol>
            </div>
        )
    }

    componentDidMount() {
        this.getData(this.props.lessonId);
        this.getLocalStorage(this.props.lessonId);
    }
    
    componentDidUpdate() {
        this.setLocalStorage();
    }
}

export default Exercise;