import React from  'react';
import { Route, Switch } from 'react-router-dom';
import Exercise from "./lessons/Exercise";
import AppNav from "./AppNav";
import ExerciseNav from "./lessons/ExerciseNav";
import WordsNav from "./words/WordsNav";
import Words from "./words/Words";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AppNav} />
        <Route path="/lessons/:id" component={Exercise} />
        <Route path="/lessons" component={ExerciseNav} />
        <Route path="/words/:id" component={Words} />
        <Route path="/words" component={WordsNav} />
    </Switch>
);

export default Routes;