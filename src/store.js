import {combineReducers, createStore, applyMiddleware} from 'redux';
import reducers from './reducers';


// const initialState = getInitialStateRenderer();

export const store = createStore(
  reducers,
  // initialState,
  applyMiddleware(
  ),
);
