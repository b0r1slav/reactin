import React from 'react';
import './Api.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            dataExercises: [],
            lessonId: 1
        };
    }

    getData = event => {
        const {value} = event.target.dataset;
        const urlExercises = "https://engrexapi.000webhostapp.com/exercises/" + value;

        fetch(urlExercises)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    dataExercises: result,
                    lessonId: value
                })
            });
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "https://engrexapi.000webhostapp.com/lessons";
        const urlExercises = "https://engrexapi.000webhostapp.com/exercises/" + this.state.lessonId;

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });

        fetch(urlExercises)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    dataExercises: result
                })
            });

    }

    render() {

        const {data, dataExercises} = this.state;

        const result = data.map((entry, index) => {
            return <a key={index} data-value={entry.id} onClick={this.getData} >{entry.title}</a>;
        });

        const resultExercises = dataExercises.map((entry, index) => {
            return (
                <li key={index}>
                    {entry.bg}
                    <input type="text"/>
                    <details>
                        <summary>Answer</summary>
                        <p>{entry.en}</p>
                    </details>
                </li>
            );
        });

        return (
            <div className="row">
                <div className="header">
                    <a className="active" href="#lessons">Lessons</a>
                </div>
                <div className="menu">{result}</div>
                <div className="main">
                    <ol>{resultExercises}</ol>
                </div>
            </div>
        );
    }
}

export default App;