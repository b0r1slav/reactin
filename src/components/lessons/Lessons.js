import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import Exercise from "./Exercise";


class Lessons extends Component {

    lessonId = (lesson = 1) => parseInt(lesson, 10);

    render() {

        return (
            <div>
                <Sidebar lessonId={ this.lessonId(this.props.match.params.id) } />
                <div className="container">
                    <Exercise lessonId={ this.lessonId(this.props.match.params.id) } />
                </div>
            </div>
        );
    }
}

export default Lessons;