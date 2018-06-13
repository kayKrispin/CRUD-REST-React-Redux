import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './redux/store'
import {BrowserRouter as Router,Switch, Route,Link} from 'react-router-dom';
import { userLogdIn } from './actions/users';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client';
import { addMessage, addHistory, isTyping,typed } from './actions/chat';


export const socket = io('http://localhost:9000');


if(localStorage.userName){
  const user = {
  Username:localStorage.userName
  }
  store.dispatch(userLogdIn(user))
}


socket.on('new message', function(message){
  store.dispatch(addMessage(message))
})
socket.on('chatHistory', function(messages){
  store.dispatch(addHistory(messages))
})

socket.on('typing', function(data){
      store.dispatch(typed(data))

    setTimeout(()=>{  store.dispatch(addHistory(data.messages))},2000);


})


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
    document.getElementById('root'));
