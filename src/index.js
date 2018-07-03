/* import React from 'react';
 * import ReactDOM from 'react-dom';
 * import App from './views/App';
 * 
 * ReactDOM.render(<App />, document.getElementById('root'));*/



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';

import  App  from './views/App/index.js';

import { attemptRelogin } from './ducks';

const history = createHistory();
const store = configureStore(history);

// Try to load already logged in user
store.dispatch(attemptRelogin.start());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/' component={App} />
    </ConnectedRouter>
  </Provider>, document.querySelector('#root'))


