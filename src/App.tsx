import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { getStore } from './framework/redux';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const store = getStore(createBrowserHistory());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={baseUrl}>
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
      </BrowserRouter>
    </Provider>
  );
}

export default App;
