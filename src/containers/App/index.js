import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createHashHistory } from 'history';
import Demo from '../Demo';
import Dashboard from '../Dashboard';
import Test from '../Test';
import Todo from '../Todo';
import NoMatch from '../../components/NoMatch';

const hashHistory = createHashHistory();

export default () => (
  <Router history={hashHistory}>
    <Switch>
      <Route path="/" exact component={Demo} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/test" component={Test} />
      <Route path="/todo" component={Todo} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Router>
)