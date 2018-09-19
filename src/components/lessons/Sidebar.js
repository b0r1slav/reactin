import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../helpers';
import SideBarItem from './SideBarItem'
import '../../css/Sidebar.css';


class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            lessonId: 1
        };
    }

    activeLesson = (lessonId, entryId) => lessonId === entryId ? 'activeLesson': '';

    render() {

        const {data} = this.state;
        const {lessonId} = this.props;

        const result = data.map(entry => SideBarItem(entry, this.activeLesson(lessonId, entry.id)));

        return <div className="menu">{result}</div>
    }

    componentDidMount() {
        const uri = url('lessons');

        axios.get(uri)
            .then(result => {
                this.setState({
                    data: result.data
                })
            });

    }
}

export default Sidebar;