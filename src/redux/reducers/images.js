import {IMAGE_FETCHED} from '../../constans/actions';

export default function imageList( state = {}, action = {} ){
    switch(action.type){
      case IMAGE_FETCHED:
          return Object.assign({},state, { images:action.images});
            default:return state
    }
  }
