import {COMMENTS_FETCHED,REQUEST_ERROR,REQUEST_SEND} from '../../constans/actions';

const defaultState = {
  loading: false,
  comments: []
};

export default function commentsList( state = defaultState, action = {} ){
    switch(action.type){
      case REQUEST_SEND:
          return Object.assign({},state, { loading:true});
      case REQUEST_ERROR:
          return Object.assign({},state, { loading:false, error : action.err});
      case COMMENTS_FETCHED:
          return Object.assign({},state, { loading:false, comments : action.comments});
            default:return state
    }
  }
