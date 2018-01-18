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
        <h1 className="app__title"> todos </h1>
        <ToDoList serviceName="apiai" config={config.apiai} />
      </div>
    );
  }
}

export default App;
