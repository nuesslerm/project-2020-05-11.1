import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button>Toggle Lifecycles</button>
          <button>Update Text</button>
          <h1>LIFECYCLES COMPONENT</h1>
        </header>
      </div>
    );
  }
}

export default App;
