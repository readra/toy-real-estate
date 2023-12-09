import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/apartment")
        .then((response) => {
          return response.json();
        })
        .then(function (data) {
            console.log(data)
          setMessages(data);
        });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul>
          {messages.map((message) => <p>{message.transactionAmount}</p>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
