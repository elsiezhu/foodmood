import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App(props) {
  const [apiRes, setApiRes] = useState("");
  fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => setApiRes(res));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <p className="App-intro">Backend response: {apiRes}</p>
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
