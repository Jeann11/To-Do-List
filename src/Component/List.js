import React from "react";
import { Button, Form, Stack } from 'react-bootstrap';


function List ({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit} className="w-75">
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

  export default List;