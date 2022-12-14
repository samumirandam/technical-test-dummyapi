import { combineReducers } from 'redux';

import navReducer from '../modules/nav/reducer';
import authReducer from '../modules/auth/reducer';
import postReducer from '../modules/post/reducer';
import userReducer from '../modules/user/reducer';
import commentReducer from '../modules/comment/reducer';

const rootReducer = combineReducers({
  nav: navReducer,
  auth: authReducer,
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
});

export default rootReducer;
