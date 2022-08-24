import {
  GET_POST_LIST_LOADING,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_ERROR,
} from "@actions/types";

const initialState = {
  postList: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: null,
    errorDetail: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_LIST_LOADING: {
      return {
        ...state,
        postList: {
          ...initialState.postList,
          isLoading: true,
        },
      };
    }
    case GET_POST_LIST_SUCCESS: {
      return {
        ...state,
        postList: {
          ...initialState.postList,
          isSucces: true,
          data: action.payload,
        },
      };
    }
    case GET_POST_LIST_ERROR: {
      return {
        ...state,
        postList: {
          ...initialState.postList,
          isError: true,
          errorDetail: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
