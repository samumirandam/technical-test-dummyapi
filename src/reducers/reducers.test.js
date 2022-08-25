import reducer, { initialState } from "./index";

import {
  GET_POST_LIST_LOADING,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "@actions/types";

describe("Test for Reducers", () => {
  test("Should return default state", () => {
    expect(reducer({}, "")).toEqual({});
  });
  test("Should return initial state", () => {
    expect(reducer(undefined, "")).toEqual(initialState);
  });

  test("Should get post list loading", () => {
    const payload = {};
    const action = {
      type: GET_POST_LIST_LOADING,
      payload,
    };
    const expected = {
      ...initialState,
      postList: {
        ...initialState.postList,
        isLoading: true,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get post list success", () => {
    const payload = {};
    const action = {
      type: GET_POST_LIST_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,
      postList: {
        ...initialState.postList,
        isSucces: true,
        data: payload,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get post list error", () => {
    const payload = {};
    const action = {
      type: GET_POST_LIST_ERROR,
      payload,
    };
    const expected = {
      ...initialState,
      postList: {
        ...initialState.postList,
        isError: true,
        errorDetail: payload,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get user loading", () => {
    const payload = {};
    const action = {
      type: GET_USER_LOADING,
      payload,
    };
    const expected = {
      ...initialState,
      user: {
        ...initialState.user,
        isLoading: true,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get user success", () => {
    const payload = {};
    const action = {
      type: GET_USER_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,
      user: {
        ...initialState.user,
        isSucces: true,
        data: payload,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get user error", () => {
    const payload = {};
    const action = {
      type: GET_USER_ERROR,
      payload,
    };
    const expected = {
      ...initialState,
      user: {
        ...initialState.user,
        isError: true,
        errorDetail: payload,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
