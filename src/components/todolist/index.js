import React, { Component } from 'react';
import SpeechBasedComponent from 'react-speech-based-component';

class ToDoListener extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  addToDo = (todo, data) => {
    this.setState({
      todos: this.state.todos.concat(data.parameters.todo)
    });
  }

  intentActionMap = {
    "add-reminder": this.addToDo
  }

  render() {
    return (
      <SpeechBasedComponent 
        className="todo-list"
        serviceName={this.props.serviceName}
        config={this.props.config}
        intentActionMap={this.intentActionMap}
      >
        { this.state.todos.map( todo => <p> {todo} </p>) }
      </SpeechBasedComponent>
    );
  }
}

export default ToDoListener;
