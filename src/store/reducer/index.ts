import {FETCH_NEWS, NEXT_PAGE, PREV_PAGE, LOADING} from '../types';

const INITIAL_STATE = {
  currentPage: 1,
  news: [],
  isLoading: false,
};

export default function newsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_NEWS:
      const news = [...action.payload];
      return {...state, news};
    case NEXT_PAGE:
      return {...state, currentPage: state.currentPage + 1};
    case PREV_PAGE:
      return {...state, currentPage: state.currentPage - 1};
    case LOADING:
      return {...state, isLoading: action.payload};
    default:
      return state;
  }
}
