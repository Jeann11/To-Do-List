import React, { useState } from "react";
import "./App.css";
import Todo from "./Component/Todo";
import List from "./Component/List";
import Card from 'react-bootstrap/Card';
import { Form, FormControl, Button } from "react-bootstrap";




function App() {
  const [hidden, setHidden] = useState(true);
  const [todos, setTodos] = React.useState([]);
  const [todoUpDate, setTodoUpDate] = useState("");
  const [currentTodoIndex, setCurrentTodoIndex] = useState(0);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const editTodo = (index, newtext) => {
    setHidden(false)
    setTodoUpDate(newtext)
    setCurrentTodoIndex(index)
  };

  const handleInputChange = (value) => {
    setTodoUpDate(value);
  };

  const updateTodo = () => {
    const newTodos = todos.map( (todo,i) => {
      if (i === currentTodoIndex) {
        // const data = { text: todoUpDate}
        todo.text = todoUpDate;
        return todo;
      } else {
        return todo;
      }
    })
    setTodos(newTodos);
    setHidden(true);
    setTodoUpDate("");
    setCurrentTodoIndex(0);
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
      <div className="container" >
        <h1 className="text-center" >Shopping List</h1>
        <p className="by">by @Jeann11</p>
        <div className="d-flex justify-content-center">
          <List addTodo={addTodo} />
        </div>
        {!hidden ?
          <Form>
            <FormControl size="sm" type="text" placeholder="change your text" defaultValue={todoUpDate} onChange={ e => {handleInputChange(e.target.value)}}/>
            <Button variant="outline-success" onClick={updateTodo}>⟲</Button>{''}
          </Form> : <form hidden></form>}
        <div className="card w-50">
          {todos.map((todo, index) => (
            <Card key={index}>
              <Card.Body>
                <Todo index={index} todo={todo} editTodo={editTodo} markTodo={markTodo} deleteTodo={deleteTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div >

  );
}


export default App;