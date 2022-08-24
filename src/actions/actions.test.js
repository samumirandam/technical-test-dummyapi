import * as actions from "./index";

import {
  GET_POST_LIST_LOADING,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_ERROR,
} from "./types";

describe("Test for Actions", () => {
  test("Should call getPostListSteps request", () => {
    const expected = {
      type: GET_POST_LIST_LOADING,
    };
    expect(actions.getPostListSteps.request()).toEqual(expected);
  });

  test("Should call getPostListSteps success", () => {
    const payload = {
      data: true,
    };
    const expected = {
      type: GET_POST_LIST_SUCCESS,
      payload: payload.data,
    };
    expect(actions.getPostListSteps.success(payload)).toEqual(expected);
  });

  test("Should call getPostListSteps error", () => {
    const payload = "test";
    const expected = {
      type: GET_POST_LIST_ERROR,
      payload: payload,
    };
    expect(actions.getPostListSteps.error(payload)).toEqual(expected);
  });

  test("Should call getPostListAction", () => {
    const payload = {
      api: "test",
    };
    const dispatch = jest.fn();
    actions.getPostListAction(payload)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
