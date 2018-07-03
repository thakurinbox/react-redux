import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './style.css';

import Login from '../Login';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/login' component={Login} />
    </Switch>
  </div>
);


export default App;
