import {ADD_MESSAGE, CHAT_HISTORY, TYPED} from '../../constans/actions';


const defaultState = {
  loading: false,
  posts: [],
  postSelected:{},
  res:[],
  data:[]
};

export default function messages(state =defaultState, action = {} ){
  switch(action.type){
    case ADD_MESSAGE:
      return [...state, action.message];
    case CHAT_HISTORY:
      return action.messages;
    case TYPED:
      return Object.assign({}, ...state , action.data);
      default:return state;
  }
}
