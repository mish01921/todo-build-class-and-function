import  { Component } from 'react';
import classNames from "classnames";


export default class TodoListClass extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], newId: 0}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTodoClick = this.handleTodoClick.bind(this)
    }

    handleSubmit(e) {
        //Avoids page refresh
        e.preventDefault();

        //new todo info
        const newTodo = {
            id: this.state.newId,
            label: e.target[0].value,
            done: false,
        };
         //chstexcel datark todo 
        if(!newTodo.label) return;
        //Add todo state and update newId

        this.setState((state) => ({
            todos: [...state.todos, newTodo],
            newId: state.newId + 1
        }));
        //clear input value 
        e.target[0].value = "";
    }

    handleTodoClick(index) {
        const updatedTodos = JSON.parse(JSON.stringify(this.state.todos));
        updatedTodos[index].done = !updatedTodos[index].done;
        //Add todo to state and update newId

        this.setState((state) => ({
            ...state,
            todos:updatedTodos,
        }))
    }

  render() {
    return (
        <>
      <div className="App-class">
        <span>Todo List Class</span>

        <form onSubmit={this.handleSubmit}>
            <input type="text" name="todo" className="class-write-input"/>
            <input type="submit" value="Add Todo" className="class-add-input"/>
        </form>
        {this.state.todos.map((todo, idx) =>(
            <div
                key={todo.id}
                onClick={() => this.handleTodoClick(idx)}
                className={classNames({ done: todo.done})}
                >
                    {todo.label}
            </div>
        ))}
      </div>
            <style>{`.done{text-decoration: line-through}`}</style>
      </>
    );
  }
}
