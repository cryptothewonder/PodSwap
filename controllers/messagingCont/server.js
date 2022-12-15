


// //Connect to Socket.io

// const express = require('express')
// const { createServer } = require("http");
// const { Server } = require("socket.io");


// const cors = require('cors')

// // const app = express();
// const app = express()
// const httpServer = createServer(app);
// const io = new Server(httpServer, { 
//   cors: {
//     origin: "http://localhost:2122",
//     methods:['GET','POST']
// } });

// httpServer.listen(4000, () => {
//   console.log("I'm listening in 4000")
// });

// io.on("connection", (socket) => {
//     console.log('user connected')
//     socket.emit('message', 'Hello World')
    
//     socket.on('disconnect', () => {
//       console.log('user disconnected')
//     })
//   // ...
// });