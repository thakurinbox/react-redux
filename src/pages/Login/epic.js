import { login } from './ducks';
import { loginUser } from '../../ducks';

const loginEpic = (action$) =>
  action$
    .ofType(loginUser.start().type)
    .mergeMap(({ data: { username, password } }) => {
      // make api request to back-end server
      // call loging success with api response
    })
    .catch((err, obs$) => obs$.startWith(login.fail('Server not responding')));

export default loginEpic;
