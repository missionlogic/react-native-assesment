import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { Home } from './app/Home';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

// const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// optional ADD reducers
// export const APP_STORE = createStore(
//   combineReducers({
//   }),
//   devtools
// );


export default function App() {
  // return (
  //   <Provider store={APP_STORE} >
  //     <Home />
  //   </Provider>
  // );
  return (
    <Home />
  );
}
