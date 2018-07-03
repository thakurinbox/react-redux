import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import createAction from './lib/createAction';
import createReducer from './lib/createReducer';

const initialState = {
  user: {
    email: null,
    webAccessToken: null,
    accessToken: null
  }
};

export const loginUser = (user) => createAction('LOGIN_USER', { user });
export const logoutUser = () => createAction('LOGOUT_USER');

export const attemptRelogin = {
  start: () => createAction('RELOGIN_START'),
  fail: () => createAction('RELOGIN_FAILED'),
  success: () => createAction('RELOGIN_SUCCESS')
};


export default combineReducers({
  ui: createReducer(initialState, {
    LOGIN_USER: (state, action) => ({
      ...state,
      user: action.user
    }),
    LOGOUT_USER: (state) => ({
      ...state,
      user: {}
    })
  }),
  routing: routerReducer
});
