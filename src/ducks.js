import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import createReducer from './lib/createReducer';

import loginReducer from './pages/Login/ducks';

const initialState = {};

export default combineReducers({
  ui: createReducer(initialState, {}),
  routing: routerReducer,
  login: loginReducer
});
