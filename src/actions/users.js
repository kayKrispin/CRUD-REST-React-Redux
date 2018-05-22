import {USERS_FETCHED,REQUEST_SEND,REQUEST_ERROR} from '../constans/actions';
import users from '../api/users';


const usersFetched = users =>({
  type:USERS_FETCHED,
  users
});

const requestSend = () =>({
  type:REQUEST_SEND
});

const requestErrors = (err) =>({
  type:REQUEST_ERROR,
  err
});

export const fetchUsers = () => dispatch => {

  dispatch(requestSend);

  return users()
    .then(users =>{dispatch(usersFetched(users))
    })
    .catch(err=>{dispatch(requestErrors(err)
    )});
}
