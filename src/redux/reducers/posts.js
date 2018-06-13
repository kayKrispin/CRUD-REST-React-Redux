import {POSTS_FETCHED,REQUEST_ERROR,POST_SELECTED,REQUEST_SEND,POST_SEND,POST_UPDATE} from '../../constans/actions';

const defaultState = {
  loading: false,
  posts: [],
  postSelected:{},


};

export default function postsList( state = defaultState, action = {} ){
    switch(action.type){
      case REQUEST_SEND:
          return Object.assign({},state, { loading:true});
      case REQUEST_ERROR:
          return Object.assign({},state, { loading:false, error : action.err});
      case POST_SELECTED:
          return Object.assign({},state, { loading:false, postSelected:action.postSelected});
      case POSTS_FETCHED:
          return Object.assign({},state, { loading:false, posts:action.posts});
      case POST_SEND:
            return  Object.assign({}, state, { loading:false, posts: [action.post,...state.posts]});
      case POST_UPDATE:
          const newPostsState = state.posts.map(post=> post.id === action.post.id  ? action.post : post )
          return Object.assign({},state, { loading:false, posts:newPostsState, post:action.post});
            default:return state
    }
  }
