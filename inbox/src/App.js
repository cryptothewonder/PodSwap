
import './App.css';
import io from "socket.io-client"

// const socket = io.connect("http://localhost:4000")

function App() {
  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input type="text" placeholder = "John..." />
      <input type= "text" placeholder = "John..." />
    </div>
  );
}

export default App;
