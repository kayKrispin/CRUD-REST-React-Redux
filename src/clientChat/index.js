const io = require('socket.io-client');

const socket = io.connect('https://localhost:8080');


export dafault function(){

function registerHandler(onMessageReceived){
  socket.on('message', onMessageReceived);
}

function unregisterHandler(){
  socket.off('message');
}

socket.on(err, function(err){
  console.log('Something goes wrong');
  console.log(err);
})

function register(name, cb){
  socket.emit('register', name ,cb)
}

function join(chatRoomName, cb){
  socket.emit('join', chatRoomName, cb)
}

function leave(chatRoomName, cb){
  socket.emit('leave', chatRoomName, cb)
}
function message(chatRoomName, msg, cb){
  socket.emit('message', { chatRoomName, message: msg} , cb)
}

function getChatRooms(cb){
  socket.emit('chatRooms', null, cb);
}

function getAvaliableUsers(cb){
  sokect.emit('avaliableUsers', null cb)
}

function handleRegister(userName,callback){
  if(!clientManager.isUserAvaliable(username)){
    return callback('user is not avaliable')
  }
  const user = clientManager.getUserByName(userName);
  clientManager.registerClient(client,user);

  return callback(null,user);
}


function handleEvent(chatroomName,createEntity){
    return ensureValidChatRoomAndUserSelected(chatroomName)
      .then(function({chatroom, user}){

          const entry = {user, ...createEntity()}
          chatroom.addEntry(entry);

          chatroom.broadcastMessage({chat: chatroom, ...entry})
          return chatroom;
      });
};

return {
  register,
   join,
   leave,
   message,
   getChatrooms,
   getAvailableUsers,
   registerHandler,
   unregisterHandler
}

}
