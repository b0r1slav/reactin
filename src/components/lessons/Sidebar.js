import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Sidebar.css';


class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            lessonId: 1
        };
    }

    componentWillReceiveProps(nextProps) {
        let lessonId = 1;

        if (nextProps.lessonId && nextProps.lessonId !== this.props.lessonId) {
            lessonId = parseInt(nextProps.lessonId, 10);
        }
        
        this.setState({
            lessonId: lessonId
        })
    }

    render() {

        const {data, lessonId} = this.state;

        const result = data.map((entry, index) => {
            return (
            <Link key={index} to={'/lessons/' + entry.id} className={lessonId === entry.id ? 'activeLesson': ''} >{entry.title}</Link>
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