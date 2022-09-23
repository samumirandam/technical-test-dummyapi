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
} from '@actions/types';

export const initialState = {
  postList: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: null,
    errorDetail: null,
  },
  user: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: null,
    errorDetail: null,
  },
  comment: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: null,
    errorDetail: null,
  },
};

// eslint-disable-next-line default-param-last
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
    case GET_USER_LOADING: {
      return {
        ...state,
        user: {
          ...initialState.user,
          isLoading: true,
        },
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: {
          ...initialState.user,
          isSucces: true,
          data: action.payload,
        },
      };
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        user: {
          ...initialState.user,
          isError: true,
          errorDetail: action.payload,
        },
      };
    }
    case GET_COMMENT_LOADING: {
      return {
        ...state,
        comment: {
          ...initialState.comment,
          isLoading: true,
        },
      };
    }
    case GET_COMMENT_SUCCESS: {
      return {
        ...state,
        comment: {
          ...initialState.comment,
          isSucces: true,
          data: action.payload,
        },
      };
    }
    case GET_COMMENT_ERROR: {
      return {
        ...state,
        comment: {
          ...initialState.comment,
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
