import React from "react";
import Button from 'react-bootstrap/Button';


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


export default Todo;