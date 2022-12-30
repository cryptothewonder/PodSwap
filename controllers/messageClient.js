
const socketio = io('http://localhost:4000');

socketio.on('message', message =>{
    console.log(message)
})