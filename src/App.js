import React, { Component } from 'react';
import ToDoList from './components/todolist';
import config from './config';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      intent: '',
      status: 'Not listening'
    };
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <button onClick={this.startToListen} className="app__button">
            Listen!
          </button>
        </header>
        <p className="app_intro">
          Estado: {this.state.status}
        </p>
        <p className="app_intro">
          Intent: {this.state.intent}
        </p>
        <ToDoList serviceName="apiai" config={config.apiai} />
      </div>
    );
  }
}

export default App;
