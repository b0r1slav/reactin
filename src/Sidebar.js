import React, {Component} from 'react';
import './Sidebar.css';


class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            lessonId: 1
        };
    }

    clickLesson = event => {
        const value = parseInt('10', event.target.dataset.value);

        this.props.handleClick(value);

        this.setState({
            lessonId: value
        });
    };

    render() {
        const {data, lessonId} = this.state;

        const result = data.map((entry, index) => {
            
            console.log(typeof lessonId, typeof entry.id);
            return (
                <a key={index} data-value={entry.id} className={lessonId === entry.id ? 'activeLesson' : ''}
                   onClick={this.clickLesson} >{entry.title}</a>
            )
        });

        return <div className="menu">{result}</div>
    }

    componentDidMount() {
        const url = "https://engrexapi.000webhostapp.com/lessons";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });

    }
}

export default Sidebar;