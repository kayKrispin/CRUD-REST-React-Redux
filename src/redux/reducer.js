import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import imageList from './reducers/images';
import userList from './reducers/users';
import postsList from './reducers/posts';
import commentsList from './reducers/comments';
import messages from './reducers/messages';

console.log(imageList)

export default combineReducers({
  imageList,
  userList,
  postsList,
  commentsList,
  messages,
  form:formReducer
})
