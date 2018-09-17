import React, { Component } from 'react';
import '../css/App.css';
import Navigation from "./Navigation";
import Routes from "./Routes";


class App extends Component {

    render() {

        return (
            <div>
                <Navigation />
                <Routes />
            </div>
        );
    }
}

export default App;