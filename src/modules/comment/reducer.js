import {
  GET_COMMENT_LOADING,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERROR,
} from './types';

export const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
  errorDetail: null,
};

// eslint-disable-next-line default-param-last
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_LOADING: {
      return {
        ...state,
        ...initialState,
        isLoading: true,
      };
    }
    case GET_COMMENT_SUCCESS: {
      return {
        ...state,
        ...initialState,
        isSuccess: true,
        data: action.payload,
      };
    }
    case GET_COMMENT_ERROR: {
      return {
        ...state,
        ...initialState.comment,
        isError: true,
        errorDetail: action.payload,
      };
    }
    default:
      return state;
  }
};

export default commentReducer;
