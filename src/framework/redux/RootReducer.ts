import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { History, State } from 'history';

export interface IApplicationState {
  router: State;
}

const getRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
  });

export default getRootReducer;
