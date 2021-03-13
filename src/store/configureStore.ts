import { createStore, applyMiddleware, combineReducers, Middleware } from 'redux';
import { createLogger } from 'redux-logger';

import { sessionReducer as session } from 'store/reducers';
import { isDevelopment } from 'utils/helpers';

const rootReducer = combineReducers({
  session,
});

const middlewares: Middleware[] = [];

// use logger middleware only while developing
if (isDevelopment) {
  const logger = createLogger();

  middlewares.push(logger);
}

export const configureStore = () => createStore(rootReducer, applyMiddleware(...middlewares));
