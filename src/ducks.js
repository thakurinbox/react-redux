import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import createReducer from './lib/createReducer';

import calendarDayReducer from './pages/CalendarDay/ducks';

const initialState = {};

export default combineReducers({
  ui: createReducer(initialState, {}),
  routing: routerReducer,
  calendarDay: calendarDayReducer
});
