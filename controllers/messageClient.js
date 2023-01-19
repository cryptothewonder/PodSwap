
const msgForm = document.getElementById('msgForm');
const socket = io();
    
socket.on('connect', () => {
  console.log('Connected to server');
});

//Message from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message)
});

//message submit
msgForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  const msg = e.target.elements.msg.value;

  //Emit message to server
  socket.emit('chatMessage',msg)

})

//Output message to DOM
function outputMessage(message){
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML=`${message}`;
  document.querySelector('')
}

