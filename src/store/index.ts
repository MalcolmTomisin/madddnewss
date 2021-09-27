import {createStore} from '@reduxjs/toolkit';
import newsReducer from './reducer';

const store = createStore(newsReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
