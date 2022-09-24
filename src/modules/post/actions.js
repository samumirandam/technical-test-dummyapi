import { getData } from '@api/get-data';

import {
  GET_POST_LIST_LOADING,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_ERROR,
} from './types';

export const getPostListSteps = {
  request: () => ({
    type: GET_POST_LIST_LOADING,
  }),
  success: (payload) => ({
    type: GET_POST_LIST_SUCCESS,
    payload: payload.data,
  }),
  error: (error) => ({
    type: GET_POST_LIST_ERROR,
    payload: error,
  }),
};

export const getPostListAction = (payload) => (dispatch) => {
  if (payload.tag) {
    getData(dispatch, getPostListSteps, {
      method: `/tag/${payload.tag}/post?limit=${payload.limit}&page=${payload.page}`,
    });
  } else {
    getData(dispatch, getPostListSteps, {
      method: `/post?limit=${payload.limit}&page=${payload.page}`,
    });
  }
};
