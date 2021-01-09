import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import RootReducer from './RootReducer';

const rootSagas = function* sagas() {
  yield all([]);
};

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: RootReducer,
  middleware,
});

sagaMiddleware.run(rootSagas);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./RootReducer', () => {
    const { newRootReducer } = require('./RootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
