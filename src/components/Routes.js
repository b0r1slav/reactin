import React from  'react';
import { Route, Switch } from 'react-router-dom';
import Exercise from "./lessons/Exercise";
import SentencesNav from "./lessons/SentencesNav";
import WordsNav from "./words/WordsNav";
import Words from "./words/Words";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={SentencesNav} />
        <Route path="/lessons/:id" component={Exercise} />
        <Route path="/lessons" component={SentencesNav} />
        <Route path="/words/:id" component={Words} />
        <Route path="/words" component={WordsNav} />
    </Switch>
);

export default Routes;