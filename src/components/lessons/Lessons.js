import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import Exercise from "./Exercise";


class Lessons extends Component {

    constructor(props) {
        super(props);

        this.lessonId = this.lessonId.bind(this);
    }

    lessonId = (lesson = 1) => parseInt(lesson, 10);

    render() {

        return (
            <div>
                <Sidebar lessonId={ this.lessonId(this.props.match.params.id) } />
                <Exercise lessonId={ this.lessonId(this.props.match.params.id) } />
            </div>
        );
    }
}

export default Lessons;