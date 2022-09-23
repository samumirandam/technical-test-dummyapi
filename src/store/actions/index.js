import { getData } from '@api/get-data';

import {
  GET_POST_LIST_LOADING,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_COMMENT_LOADING,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERROR,
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

export const getUserSteps = {
  request: () => ({
    type: GET_USER_LOADING,
  }),
  success: (payload) => ({
    type: GET_USER_SUCCESS,
    payload: payload.data,
  }),
  error: (error) => ({
    type: GET_USER_ERROR,
    payload: error,
  }),
};

export const getUserAction = (payload) => (dispatch) => {
  getData(dispatch, getUserSteps, { method: `/user/${payload}` });
};

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
