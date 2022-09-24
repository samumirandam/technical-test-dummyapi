import { combineReducers } from 'redux';

import postReducer from '@modules/post/reducer';
import userReducer from '@modules/user/reducer';
import commentReducer from '@modules/comment/reducer';

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
});

export default rootReducer;
