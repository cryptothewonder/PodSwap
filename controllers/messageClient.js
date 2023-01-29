
const msgForm = document.getElementById('msgForm');
const chatMessages = document.querySelector(".chat-messages")
// const User = require('../models/User');

const socket = io();
    
socket.on('connect', () => {
  console.log('Connected to server');
});

//Message from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message)
});

//scroll down
chatMessages.scrollTop = chatMessages.scrollHeight;

//message submit
msgForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  const msg = e.target.elements.msg.value;

  //Emit message to server
  socket.emit('chatMessage',msg)

  //clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
})

//Output message to DOM
function outputMessage(message){
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML =`<p> <%= user.userName %></p><p><%= message %> </p>`;
  document.querySelector('.chat-messages').appendChild(div);
}


/* <p>${user.userName}</p> */

//28:00 minutes on the traversy video
