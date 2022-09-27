import { GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR } from '../types';
import reducer, { initialState } from '../reducer';

describe('Test for user reducers', () => {
  test('Should return default state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('Should return initial state', () => {
    expect(reducer(undefined, '')).toEqual(initialState);
  });

  test('Should get user loading', () => {
    const payload = {};
    const action = {
      type: GET_USER_LOADING,
      payload,
    };
    const expected = {
      ...initialState,
      isLoading: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get user success', () => {
    const payload = {};
    const action = {
      type: GET_USER_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,
      isSuccess: true,
      data: payload,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get user error', () => {
    const payload = {};
    const action = {
      type: GET_USER_ERROR,
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
