import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../components/layout/Main';
import Favorites from '../components/layout/Favorites';

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/favorites" component={Favorites} />
    </Switch>
  </main>
);

export default Router;
