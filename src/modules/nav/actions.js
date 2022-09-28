import { SET_SEARCH, SET_LAST_URL } from './types';

export const setSearchAction = (payload) => ({
  type: SET_SEARCH,
  payload,
});

export const setLastUrlAction = (payload) => ({
  type: SET_LAST_URL,
  payload,
});
