import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createEpicMiddleware } from "redux-observable";

import rootEpic from "./epic";
import rootReducer from "./ducks";

const epicMiddleware = createEpicMiddleware();

export default history => {
  const reduxRouterMiddleware = routerMiddleware(history);

  const store = createStore(
    rootReducer,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxRouterMiddleware, epicMiddleware)
  );

  epicMiddleware.run(rootEpic);

  return store;
};
