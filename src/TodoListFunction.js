import { useState} from 'react'
import classNames from 'classnames'
function TodoListFunction() {
  const [newId, setNewId] = useState(0)
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) =>{
    //eji refreshic xusapelu(avoids) hamar
    e.preventDefault()
    //nor todo tvyalner
    const newTodo = {
      id: newId,
      label: e.target[0].value,
      done: false,
    };
    //vorpeszi chsexcvi datark todo
    if(!newTodo.label) return;

    //stexcel todo stat ev tarmacnel nor ID
    setTodos((todos) => [...todos, newTodo]);

    //clear input value 
    e.target[0].value=""

    //hajord todo-i hamar tarmacnel newId
    setNewId((id)=> id + 1)    
  };

  const handleClickTodo = (index) => {
    const updatedTodos = JSON.parse(JSON.stringify(todos));
    updatedTodos[index].done = !updatedTodos[index].done;

    //Add todo to state and update newId 
    setTodos(updatedTodos)
  };

  return (
    <>
    <div className="App-function" >
      <span className="span-func">Todo List Function</span>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" className="func-write-input"/>
        <input type="submit" value="Add todo" className="func-add-input"/>
      </form>
      {todos.map((todo, idx) =>(
            <div
                key={todo.id}
                onClick={() => handleClickTodo(idx)}
                className={classNames({ done: todo.done})}
                >
                    {todo.label}
            </div>
        ))}
    </div>
    </>
  )
}

export default TodoListFunction