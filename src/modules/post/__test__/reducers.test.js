import {
  GET_POST_LIST_LOADING,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_ERROR,
} from '../types';
import reducer, { initialState } from '../reducer';

describe('Test for Reducers', () => {
  test('Should return default state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('Should return initial state', () => {
    expect(reducer(undefined, '')).toEqual(initialState);
  });

  test('Should get post list loading', () => {
    const payload = {};
    const action = {
      type: GET_POST_LIST_LOADING,
      payload,
    };
    const expected = {
      ...initialState,
      isLoading: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get post list success', () => {
    const payload = {};
    const action = {
      type: GET_POST_LIST_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,
      isSucces: true,
      data: payload,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get post list error', () => {
    const payload = {};
    const action = {
      type: GET_POST_LIST_ERROR,
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
