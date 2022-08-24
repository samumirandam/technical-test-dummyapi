import { getPost } from "@api/get-post";

import {
  GET_POST_LIST_LOADING,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_ERROR,
} from "./types";

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
  getPost(dispatch, getPostListSteps, payload);
};
