import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import Exercise from "./Exercise";


class Lessons extends Component {

    render() {

        return (
            <div>
                <Sidebar lessonId={this.props.match.params.id} />
                <Exercise lessonId={this.props.match.params.id} />
            </div>
        );
    }
}

export default Lessons;