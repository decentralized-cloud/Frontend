import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import getRootReducer from './RootReducer';

const rootSagas = function* sagas() {
  yield all([]);
};

const getStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware, routerMiddleware(history)];

  const store = configureStore({
    reducer: getRootReducer(history),
    middleware,
  });

  sagaMiddleware.run(rootSagas);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./RootReducer', () => {
      const { newRootReducer } = require('./RootReducer').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};

export default getStore;
