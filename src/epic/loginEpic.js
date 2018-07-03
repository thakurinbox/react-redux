import { combineEpics } from 'redux-observable';

import { Observable } from 'rxjs';
import { push } from 'react-router-redux';

import { attemptRelogin, loginUser } from '../ducks';


export default combineEpics();
