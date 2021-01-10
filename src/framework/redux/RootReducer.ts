import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

const getRootReducer = (history: History) => combineReducers({ router: connectRouter(history) });

export default getRootReducer;
