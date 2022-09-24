import { getData } from '@api/get-data';

import {
  GET_COMMENT_LOADING,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERROR,
} from './types';

export const getCommentSteps = {
  request: () => ({
    type: GET_COMMENT_LOADING,
  }),
  success: (payload) => ({
    type: GET_COMMENT_SUCCESS,
    payload: payload.data,
  }),
  error: (error) => ({
    type: GET_COMMENT_ERROR,
    payload: error,
  }),
};

export const getCommentAction = (payload) => (dispatch) => {
  getData(dispatch, getCommentSteps, { method: `/post/${payload}/comment` });
};
