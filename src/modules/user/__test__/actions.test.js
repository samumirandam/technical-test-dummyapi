import * as actions from '../actions';

import { GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR } from '../types';

describe('Test for user actions', () => {
  test('Should call getUserSteps request', () => {
    const expected = {
      type: GET_USER_LOADING,
    };
    expect(actions.getUserSteps.request()).toEqual(expected);
  });

  test('Should call getUserSteps success', () => {
    const payload = {
      data: true,
    };
    const expected = {
      type: GET_USER_SUCCESS,
      payload: payload.data,
    };
    expect(actions.getUserSteps.success(payload)).toEqual(expected);
  });

  test('Should call getUserSteps error', () => {
    const payload = 'test';
    const expected = {
      type: GET_USER_ERROR,
      payload,
    };
    expect(actions.getUserSteps.error(payload)).toEqual(expected);
  });

  test('Should call getUserAction', () => {
    const payload = 'abc123';
    const dispatch = jest.fn();
    actions.getUserAction(payload)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
