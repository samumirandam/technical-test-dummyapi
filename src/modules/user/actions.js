import { getData } from '@api/get-data';

import { GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR } from './types';

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
