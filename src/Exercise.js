import React, {Component} from 'react';
import './Exercise.css';


class Exercise extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            lessonId: 1
        }
    }

    componentWillReceiveProps(nextProps) {
        this.getData(nextProps.lessonId)
    }

    getData = lessonId => {
        const url = "https://engrexapi.000webhostapp.com/exercises/" + lessonId;

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    };

    render() {

        const {data} = this.state;
        const result = data.map((entry, index) => {
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
            <div className="main">
                <ol>{result}</ol>
            </div>
        )
    }

    componentDidMount() {
        this.getData(this.state.lessonId);
    }
}

export default Exercise;