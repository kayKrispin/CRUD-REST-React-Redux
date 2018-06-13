const app = require('express')();
const http = require('http').Server(app)
const io = require('socket.io')(http);


http.listen('9000',function(){
  console.log('Listening on port 9000 thousand')
})

const messages = [ { time:'fabruary', text:'cmo mah' },  { time:'january', text:'cmo shet' }]

app.get('/', function(req, res){
  res.send('<h1>Hello boys</h1>')
})

io.on('connection', function(socket){
  console.log('Have been connected');

socket.on('disconnect', function(){
  console.log('Man hade to be gone')
})

socket.on('new message', function(message){
  console.log("New message has been send mah " );
  messages.push(message);

  io.emit('new message', message);
})

socket.on('typing', function(data){
  console.log(data)
  console.log(`Broadcasting to alles users `);
  socket.broadcast.emit('typing', data);
  socket.emit('chatHistory', messages);


});
socket.on('typed',function(){

  socket.emit('chatHistory', messages);

})

socket.emit('chatHistory', messages);

});
