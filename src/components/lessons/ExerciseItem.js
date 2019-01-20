import React, { Component } from 'react';
import ExerciseInput from "./ExerciseInput";


class ExerciseItem extends Component {
    
    render() {

        let visit = this.props.localData[`answer${this.props.data.id}`] ? 'visited' : '';

        return (
            <li>
                {this.props.data.bg}
                <ExerciseInput input={this.props} />
                <details>
                    <summary data-id={this.props.data.id} className={visit} onClick={this.props.handleClickAnswer}>Answer</summary>
                    <p>{this.props.data.en}</p>
                </details>
            </li>
        );
    }
}

export default ExerciseItem;