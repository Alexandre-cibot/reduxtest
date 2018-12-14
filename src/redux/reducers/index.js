import { combineReducers } from 'redux';
import postReducer from '@/redux/reducers/postReducer';

export default combineReducers({
  posts: postReducer
});