import * as actions from '../actions';

import {
  GET_POST_LIST_LOADING,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_ERROR,
} from '../types';

describe('Test for post actions', () => {
  test('Should call getPostListSteps request', () => {
    const expected = {
      type: GET_POST_LIST_LOADING,
    };
    expect(actions.getPostListSteps.request()).toEqual(expected);
  });

  test('Should call getPostListSteps success', () => {
    const payload = {
      data: true,
    };
    const expected = {
      type: GET_POST_LIST_SUCCESS,
      payload: payload.data,
    };
    expect(actions.getPostListSteps.success(payload)).toEqual(expected);
  });

  test('Should call getPostListSteps error', () => {
    const payload = 'test';
    const expected = {
      type: GET_POST_LIST_ERROR,
      payload,
    };
    expect(actions.getPostListSteps.error(payload)).toEqual(expected);
  });

  test('Should call getPostListAction with limit', () => {
    const payload = { limit: 12 };
    const dispatch = jest.fn();
    actions.getPostListAction(payload)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });

  test('Should call getPostListAction with limit and tag', () => {
    const payload = { limit: 12, tag: 'cat' };
    const dispatch = jest.fn();
    actions.getPostListAction(payload)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
