import * as actions from './index';

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

describe('Test for Actions', () => {
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
