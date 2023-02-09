import React from "react";
import "./App.css";
import Todo from "./Component/Todo";
import List from "./Component/List";
import Card from 'react-bootstrap/Card';



function App() {
  const [todos, setTodos] = React.useState([
    /*  {
       text: "It's an example",
       isDone: false
     }  */
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app" >
      <div className="container" key="value">
        <h1 className="text-center" >Shopping List</h1>
        <p className="by">by @Jeann11</p>
        <div className="d-flex justify-content-center">
          <List addTodo={addTodo} />
        </div>
        <div class="card" className="w-50">
          {todos.map((todos, index) => (
            <Card>
              <Card.Body>
                <Todo key={index} index={index} todo={todos} markTodo={markTodo} deleteTodo={deleteTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>

  );
}


export default App;