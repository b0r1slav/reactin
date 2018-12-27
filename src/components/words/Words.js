import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../helpers';
import WordsItem from "./WordsItem";

class Words extends Component {
    
    constructor(props) {
        super(props);

        this.module = 'words';
        this.state = {
            data: [],
        };
        
        this.getData = this.getData.bind(this);
    }

    getData = (lesson = 1) => {
        
        const uri  = url(`/${this.module}/${lesson}/20`);

        axios.get(uri)
            .then(result => {
                this.setState({
                    data: result.data.data
                })
            });
    };
    
    setVisited = (id) => {
        let visited = localStorage.getItem(this.module);
        let local = [];
        if (visited) {
            
            local = JSON.parse(visited);
            if ( local.indexOf(id) > -1 ) {
                return;
            } else {
                local.push(id);
                localStorage.setItem(this.module, JSON.stringify(local));
            }
            
        } else {
            localStorage.setItem(this.module, JSON.stringify([id]));
        }
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
        const param = parseInt(this.props.match.params.id, 10);
        this.getData(param);
        this.setVisited(param)
    }
}

export default Words;