import createAction from '../../lib/createAction';
import createReducer from '../../lib/createReducer';

export const initialState = {
  inProgress: false,
  errors: {
    username: null,
    password: null,
    form: null
  }
};

export const login = {
  start: (data) => createAction('LOGIN_START', { data }),
  fail: (error) => createAction('LOGIN_ERROR', { error }),
  success: (data) => createAction('LOGIN_SUCCESS', { data })
};

export default createReducer(initialState, {});
