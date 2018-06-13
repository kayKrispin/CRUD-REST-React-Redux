import  { ADD_MESSAGE, NEW_MESSAGE, CHAT_HISTORY, IS_TYPING,TYPED } from '../constans/actions';
import { socket } from '../index.js'
import moment from 'moment';
import Chance from 'chance';

export const addMessage = (message) =>({
  type:ADD_MESSAGE,
  message
});

export const typed = (data)=>({
  type:TYPED,
  data
})

export const addHistory = (messages) =>({
  type:CHAT_HISTORY,
  messages
});

const chance  = new Chance();
const name = chance.first();
const msg = "Is typing...."

export function newMessage (message){
  const time = moment().format('HH:mm:ss');
  socket.emit('new message', {message, time, name });
    return{
      type:NEW_MESSAGE
  }
}


export function isTyping(messages){
  socket.emit('typing', {msg, name,messages });
  socket.emit('typed')
return{
    type:IS_TYPING,
    msg,name
  }
}
