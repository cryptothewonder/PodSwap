const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
const messageRoutes = require("./routes/messages")



//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/post", postRoutes);
app.use("/inbox", messageRoutes)

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});

// Connect to Socket.io

// const path = require('path')
const { createServer } = require("http");
const { Server } = require("socket.io");


const cors = require('cors');
const { Socket } = require("dgram");
app.use(cors());

// const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
  cors: {
    origin: "http://localhost:2122",
    methods:['GET','POST']
} });

httpServer.listen(4000, () => {
  console.log("I'm listening in 4000")
});

io.on("connection", socket => {
    console.log('user connected')
    socket.emit('message', 'Hello World')
    
    socket.on('disconnect', () => {
      console.log('user disconnected')
      io.emit('user has left the chat')
    })
  // ...
});



app.get("/inbox", (req, res) => {
  res.sendFile(__dirname + "/views/inbox.html");
});

app.get('/controllers/messageClient.js', (req, res) => {
  res.set('Content-Type', 'text/javascript');
  res.sendFile(__dirname + '/controllers/messageClient.js');
});


//image preview
// app.use(express.static(path.join(process.cwd(), 'views')));

  