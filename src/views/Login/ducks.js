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
  start: (data) => createAction('START_LOGIN', { data }),
  fail: (error) => createAction('LOGIN_ERROR', { error }),
  success: () => createAction('LOGIN_SUCCESS')
};


export default createReducer(initialState, {});
