import {USERS_FETCHED,REQUEST_ERROR,REQUEST_SEND,USER_LOGIN,USER_LOGGED_OUT} from '../../constans/actions';

const defaultState = {
  loading: false,
  users: [],

};

export default function usersList( state = defaultState, action = {} ){
    switch(action.type){
      case REQUEST_SEND:
          return Object.assign({},state, { loading:true});
      case REQUEST_ERROR:
          return Object.assign({},state, { loading:false, error : action.err});
      case USER_LOGIN:
          return Object.assign({},state, { loading:false, user : action.user});
      case USER_LOGGED_OUT:
          return {}
      case USERS_FETCHED:
          return Object.assign({},state, { loading:false, users:action.users});
            default:return state
    }
  }
