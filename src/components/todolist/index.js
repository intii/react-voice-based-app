import React, { Component } from 'react';
import SpeechBasedComponent from 'react-speech-based-component';
import './styles.css';

class ToDoListener extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      completed: []
    };
  }

  addToDo = (todo, data) => {
    this.setState({
      todos: this.state.todos.concat(data.parameters.todo)
    });
  }

  completeToDo = (intent, data) => {
    const ordinal = data.parameters.ordinal;
    if (ordinal) {
      const todoNumber = parseInt(ordinal, 10);
      if (todoNumber <= this.state.todos.length) {
        const order = todoNumber - 1;
        if (!this.state.completed.includes(order)) {
          this.setState({
            completed: this.state.completed.concat(order)
          });
        }
      }
    }
  }

  intentActionMap = {
    'add-reminder': this.addToDo,
    'complete-todo': this.completeToDo
  }

  render() {
    return (
      <SpeechBasedComponent 
        className="todo-list"
        serviceName={this.props.serviceName}
        config={this.props.config}
        intentActionMap={this.intentActionMap}
      >
        <div className="todo-list__empty">
          <div className="todo-list__wrapper">
            Add a reminder...
          </div>
        </div>
        <ul className="todo-list">
          { this.state.todos.map((todo, index) => (
            <li className={`todo-list__item ${this.state.completed.includes(index) && 'todo-list__item--checked'}`}> 
              {todo} 
            </li>
          )) }
        </ul>

      </SpeechBasedComponent>
    );
  }
}

export default ToDoListener;
