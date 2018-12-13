import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../helpers';
import WordsItem from "./WordsItem";

class Words extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    getData = () => {

        const uri = url('words/1');

        axios.get(uri)
            .then(result => {
                this.setState({
                    data: result.data.data
                })
            });
    };

    render() {
        const {data} = this.state;
        
        const result = data.map(entry => (
            <WordsItem
                key={entry.id}
                data={entry}
            />)
        );

        return (
            <div className="container">
                <div className="main">
                    <ol>{result}</ol>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getData();
    }
}

export default Words;