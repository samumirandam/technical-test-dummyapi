import { SET_SEARCH, SET_LAST_URL } from './types';

export const initialState = {
  search: undefined,
  lastUrl: undefined,
};

// eslint-disable-next-line default-param-last
const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case SET_LAST_URL: {
      return {
        ...state,
        lastUrl: action.payload,
      };
    }
    default:
      return state;
  }
};

export default navReducer;
