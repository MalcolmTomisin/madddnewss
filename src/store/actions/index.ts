import {FETCH_NEWS, NEXT_PAGE, PREV_PAGE, LOADING} from '../types';

export const getNews = payload => ({
  type: FETCH_NEWS,
  payload,
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});

export const setLoading = payload => ({
  type: LOADING,
  payload,
});
