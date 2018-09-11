import React from 'react';
import './Api.css';
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Exercise from "./Exercise";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lessonId: 1
        };
    }

    handleClick = lesson => {

      this.setState({
         lessonId: lesson
      });
    };

    render() {

        return (
            <div className="row">
                <Navigation/>
                <Sidebar handleClick={this.handleClick}/>
                <Exercise lessonId={this.state.lessonId}/>
            </div>
        );
    }
}

export default App;