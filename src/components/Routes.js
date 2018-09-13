import React from  'react';
import { Route, Switch } from 'react-router-dom';
import Lessons from "./lessons/Lessons";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Lessons} />
        <Route path="/lessons/:id?" component={Lessons} />
    </Switch>
);

export default Routes;