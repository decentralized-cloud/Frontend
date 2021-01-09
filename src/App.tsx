import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
