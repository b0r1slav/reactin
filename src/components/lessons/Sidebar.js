import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../../helpers';
import '../../css/Sidebar.css';


class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            lessonId: 1
        };
    }

    render() {

        const {data} = this.state;
        const {lessonId} = this.props;

        const result = data.map((entry, index) => {
            return (
            <Link key={index} to={'/lessons/' + entry.id} className={lessonId === entry.id ? 'activeLesson': ''} >{entry.title}</Link>
            )
        });

        return <div className="menu">{result}</div>
    }

    componentDidMount() {
        const uri = url('lessons');

        fetch(uri)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });

    }
}

export default Sidebar;