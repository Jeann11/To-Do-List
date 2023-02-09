import React from "react";
import "./App.css";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack'
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, deleteTodo }) {
  return (
    <div className="to_do">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => deleteTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label id="addtext"><b>Add Items </b></Form.Label>
        <Stack direction="horizontal" gap={3}>
          <Form.Control type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add items here ✎" />
          <Button id="mybutton" variant="primary" type="submit">
            Add
          </Button>
        </Stack>
      </Form.Group>
      <p className="list"> LIST </p>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
   /*  {
      text: "It's an example",
      isDone: false
    } */
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
        <FormTodo addTodo={addTodo} />
        <div>
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