import TodoListClass from "./TodoListClass";
import TodoListFunction from "./TodoListFunction";
import "./TodoFuncClass.css"

export default function App() {
  return (
    <div className="App">
      <div className="todo-class">
       <TodoListClass />
      </div>

      <div className="todo-func">
       <TodoListFunction />
      </div>
      
    </div>
  )
}