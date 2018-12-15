import React from  'react';
import { Route, Switch } from 'react-router-dom';
import Lessons from "./lessons/Lessons";
import WordsNav from "./words/WordsNav";
import Words from "./words/Words";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Lessons} />
        <Route path="/lessons/:id?" component={Lessons} />
        <Route path="/words/:id" component={Words} />
        <Route path="/words" component={WordsNav} />
    </Switch>
);

export default Routes;