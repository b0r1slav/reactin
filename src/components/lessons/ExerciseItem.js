import React, { Component } from 'react';
import ExerciseInput from "./ExerciseInput";


class ExerciseItem extends Component {

    render() {

        return (
            <li>
                {this.props.data.bg}
                <ExerciseInput input={this.props} />
                <details>
                    <summary>Answer</summary>
                    <p>{this.props.data.en}</p>
                </details>
            </li>
        );
    }
}

export default ExerciseItem;