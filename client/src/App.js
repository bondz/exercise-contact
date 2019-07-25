import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </>
  );
}

function Home() {
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
      </header>
    </div>
  );
}

function About() {
  return 'This was built by Decadevs';
}

export default App;
