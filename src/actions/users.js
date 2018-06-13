import {USERS_FETCHED,REQUEST_SEND,REQUEST_ERROR,USER_LOGIN,USER_LOGGED_OUT} from '../constans/actions';
import users from '../api/users';


const usersFetched = users =>({
  type:USERS_FETCHED,
  users
});

export const userLogdIn = user=>({
  type:USER_LOGIN,
  user
})

const userLoggedOut = ()=>({
  type:USER_LOGGED_OUT
})

const requestSend = () =>({
  type:REQUEST_SEND
});

const requestErrors = (err) =>({
  type:REQUEST_ERROR,
  err
});

export const login = (user) => dispatch=>{
  localStorage.userName = user.Username
    dispatch(userLogdIn(user))
}

export const logout = () => dispatch => {
  localStorage.removeItem('userName');
  dispatch(userLoggedOut());
}

export const fetchUsers = () => dispatch => {
  dispatch(requestSend);
  return users()
    .then(users =>{dispatch(usersFetched(users))
    })
    .catch(err=>{dispatch(requestErrors(err)
    )});
}
