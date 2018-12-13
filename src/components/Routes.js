import React from  'react';
import { Route, Switch } from 'react-router-dom';
import Lessons from "./lessons/Lessons";
import Words from "./words/Words";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Lessons} />
        <Route path="/lessons/:id?" component={Lessons} />
        <Route path="/words" component={Words} />
    </Switch>
);

export default Routes;