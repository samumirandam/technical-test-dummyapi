import {
  GET_COMMENT_LOADING,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERROR,
} from '../types';
import reducer, { initialState } from '../reducer';

describe('Test for comment reducers', () => {
  test('Should return default state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('Should return initial state', () => {
    expect(reducer(undefined, '')).toEqual(initialState);
  });

  test('Should get comment loading', () => {
    const payload = {};
    const action = {
      type: GET_COMMENT_LOADING,
      payload,
    };
    const expected = {
      ...initialState,
      isLoading: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get comment success', () => {
    const payload = {};
    const action = {
      type: GET_COMMENT_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,
      isSucces: true,
      data: payload,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get comment error', () => {
    const payload = {};
    const action = {
      type: GET_COMMENT_ERROR,
      payload,
    };
    const expected = {
      ...initialState,
      isError: true,
      errorDetail: payload,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
