import { GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR } from './types';

export const initialState = {
  isLoading: false,
  isSucces: false,
  isError: false,
  data: null,
  errorDetail: null,
};

// eslint-disable-next-line default-param-last
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOADING: {
      return {
        ...state,
        ...initialState,
        isLoading: true,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        ...initialState,
        isSucces: true,
        data: action.payload,
      };
    }
    case GET_USER_ERROR: {
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

export default userReducer;
