import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../helpers';
import WordsItem from "./WordsItem";
import Navigation from "../Navigation";

class Words extends Component {
    
    constructor(props) {
        super(props);

        this.module = 'words';
        this.moduleUrl = '/words/';
        this.itemsCount = 20;
        this.state = {
            data: [],
        };
    }

    getData = (lesson = 1) => {
        const uri  = url(`${this.moduleUrl}${lesson}/${this.itemsCount}`);
        const localData = JSON.parse( localStorage.getItem(`${this.module}Data`) );
        const localKey = `lesson${lesson}`;
        
        if ( localData && localData[localKey] ) {
            this.setState({
                    data: localData[localKey]
            });
        } else {
            axios.get(uri)
                .then(result => {
                    this.setLocalData(result.data.data, localKey, localData);
                    
                    this.setState({
                        data: result.data.data
                    });
                });
        }
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
    
    setLocalData = (apiData, localKey, localData) => {
        if (localData) {
            localData[localKey] = apiData;
        } else {
            localData = {[localKey]: apiData};
        }
        
        localStorage.setItem( `${this.module}Data`, JSON.stringify(localData) );
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
            	<Navigation title={`lesson ${this.props.match.params.id}`} previousUrl={this.moduleUrl} />
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