import React, { Component } from 'react';


class ExerciseInput extends Component {

    render() {

        return (
            <input
                type="text"
                data-id={this.props.input.data.id}
                value={this.props.input.localData[this.props.input.data.id] || ''}
                onChange={this.props.input.handleOnChange} />
        );
    }
}

export default ExerciseInput;