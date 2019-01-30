import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from '../Landing';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
