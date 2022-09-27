import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './types';

export const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
  errorDetail: null,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_LOADING:
    case LOGIN_LOADING: {
      return {
        ...state,
        ...initialState,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...initialState,
        isSuccess: true,
        data: action.payload,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        ...initialState,
        isSuccess: true,
      };
    }
    case LOGOUT_ERROR:
    case LOGIN_ERROR: {
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

export default authReducer;
