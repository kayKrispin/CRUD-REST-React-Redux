import {USERS_FETCHED,REQUEST_ERROR,REQUEST_SEND} from '../../constans/actions';

const defaultState = {
  loading: false,
  users: []
};

export default function usersList( state = defaultState, action = {} ){
    switch(action.type){
      case REQUEST_SEND:
          return Object.assign({},state, { loading:true});
      case REQUEST_ERROR:
          return Object.assign({},state, { loading:false, error : action.err});
      case USERS_FETCHED:
          return Object.assign({},state, { loading:false, users:action.users});
            default:return state
    }
  }
