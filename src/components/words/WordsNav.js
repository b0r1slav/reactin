import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../helpers';
import WordsNavItem from './WordsNavItem';
import './WordsNav.css';

class WordsNav extends Component {
    
    constructor(props) {
        super(props);

        this.module = 'words';
        this.dataUrl = '/words/1';
        this.state = {
            rowsCount: [],
        };
        
        this.getData = this.getData.bind(this);
    }

    getData = () => {

        const uri = url(this.dataUrl);

        axios.get(uri)
            .then(result => {
                this.setState({
                    rowsCount: result.data.rows.rowsCount
                })
            });
    };

    render() {
        const {rowsCount} = this.state;
        const elements = [];
        const items = Math.ceil(rowsCount / 20);
        
        for (let i = 1; i <= items; i++) {
            let data = {url: `/${this.module}/${i}`, content: `Lesson ${i}`};
            elements.push(<WordsNavItem key={i} item={data}/>);
        }

        return (
            <div className="container">
                <div className="main">
                    <ol id="wordsNavList">{elements}</ol>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getData();
    }
}

export default WordsNav;