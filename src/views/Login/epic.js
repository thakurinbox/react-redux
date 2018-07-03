import { Observable } from 'rxjs';

import { login } from './ducks';
import { loginUser } from '../../ducks';
import { apiUrls } from '../../config';


const loginEpic = (action$) => action$
      .ofType('START_LOGIN')
      .mergeMap(({ data: { username, password } }) => {

      })
      .catch((err, obs$) => obs$.startWith(login.fail('Server not responding')));

export default loginEpic;
