import { login, logout } from '@api/auth';

import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './types';

export const loginSteps = {
  request: () => ({
    type: LOGIN_LOADING,
  }),
  success: (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
  }),
  error: (error) => ({
    type: LOGIN_ERROR,
    payload: error,
  }),
};

export const loginAction = (payload) => (dispatch) => {
  login(dispatch, loginSteps, payload);
};

export const logoutSteps = {
  request: () => ({
    type: LOGOUT_LOADING,
  }),
  success: (payload) => ({
    type: LOGOUT_SUCCESS,
    payload,
  }),
  error: (error) => ({
    type: LOGOUT_ERROR,
    payload: error,
  }),
};

export const logoutAction = (payload) => (dispatch) => {
  logout(dispatch, logoutSteps, payload);
};
