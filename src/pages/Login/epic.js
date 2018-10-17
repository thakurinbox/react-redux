import { login } from './ducks';

const loginEpic = (action$) =>
  action$
    .ofType(login.start().type)
    .mergeMap(({ data: { username, password } }) => {
      // make api request to back-end server
      // call loging success with api response
    })
    .catch((err, obs$) => obs$.startWith(login.fail('Server not responding')));

export default loginEpic;
