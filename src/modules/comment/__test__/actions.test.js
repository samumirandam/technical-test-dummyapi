import * as actions from '../actions';

import {
  GET_COMMENT_LOADING,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERROR,
} from '../types';

describe('Test for comment actions', () => {
  test('Should call getCommentSteps request', () => {
    const expected = {
      type: GET_COMMENT_LOADING,
    };
    expect(actions.getCommentSteps.request()).toEqual(expected);
  });

  test('Should call getCommentSteps success', () => {
    const payload = {
      data: true,
    };
    const expected = {
      type: GET_COMMENT_SUCCESS,
      payload: payload.data,
    };
    expect(actions.getCommentSteps.success(payload)).toEqual(expected);
  });

  test('Should call getCommentSteps error', () => {
    const payload = 'test';
    const expected = {
      type: GET_COMMENT_ERROR,
      payload,
    };
    expect(actions.getCommentSteps.error(payload)).toEqual(expected);
  });

  test('Should call getCommentAction', () => {
    const payload = 'abc123';
    const dispatch = jest.fn();
    actions.getCommentAction(payload)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
