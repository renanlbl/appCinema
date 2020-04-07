import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import Dashboard from '../src/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  )
}