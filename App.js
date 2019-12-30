import React from 'react';
import logo from './logo.svg';
import './App.css';
import getDataObject from "./redux/redux"
import GetDataContainer from "./components/getDataContainer"

function App() {
    let onAddPost = () => {
        getDataObject()
    }
    return (
    <div className="App">
      <GetDataContainer />
      <header className="App-header">
          <button>click me i am thunk</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
