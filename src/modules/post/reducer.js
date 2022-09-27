import {
  GET_POST_LIST_LOADING,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_ERROR,
} from './types';

export const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
  errorDetail: null,
};

// eslint-disable-next-line default-param-last
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_LIST_LOADING: {
      return {
        ...state,
        ...initialState,
        isLoading: true,
      };
    }
    case GET_POST_LIST_SUCCESS: {
      return {
        ...state,
        ...initialState,
        isSuccess: true,
        data: action.payload,
      };
    }
    case GET_POST_LIST_ERROR: {
      return {
        ...state,
        ...initialState,
        isError: true,
        errorDetail: action.payload,
      };
    }

    default:
      return state;
  }
};

export default postReducer;
