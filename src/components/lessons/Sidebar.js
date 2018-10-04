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

    handleClick = () => document.querySelector('li:first-child').scrollIntoView({alignToTop: true});

    render() {

        const {data} = this.state;
        const {lessonId} = this.props;
        const result = data.map(entry => (
            <SideBarItem
                key={entry.id}
                entry={entry}
                htmlClass={this.activeLesson(lessonId, entry.id)}
                handleClick={this.handleClick}
            />)
        );

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
