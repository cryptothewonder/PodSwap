
import './App.css';
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

function App() {
  return (
    <div className="App">
      <h3>Join a chat</h3>
    </div>
  );
}

export default App;
