import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  /*markComplete=()=>{
    console.log('hello')
  }*/
  render() {
    console.log(this.props);
      return this.props.todos.map((todo)=>(
          //<h3>{todo.title}</h3>
         // <TodoItem key={todo.id} todo={todo}/>
         <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
      ));
    /*console.log(this.props.todos)
    return (
      <div>
        <h1>Todos</h1>
      </div>
    );*/
  }
}
//proptypes
Todos.propTypes={
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
