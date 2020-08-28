import React, { useState, useContext } from "react";
import {
  Input,
  Form,
  FormGroup,
  Col,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
import TodoContext from "../contexts/todos/TodoContext";
import uuid from "react-uuid";

const AddToDo = () => {
  let [localState, setLocalState] = useState("");

  const values = useContext(TodoContext);
  const { AddTodos } = values;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!localState) return;
    AddTodos({
      id: uuid(),
      title: localState,
    });
    setLocalState("");
    console.log(localState);
  };
  return (
    <>
      <Form className="m-3" onSubmit={onSubmit}>
        <FormGroup col>
          <Col md={4} sm={7} className="mx-auto">
            <InputGroup>
              <Input
                className="border-dark"
                name="addtodo"
                value={localState}
                placeholder="Enter Todo"
                onChange={(e) => setLocalState(e.target.value)}
              />
              <InputGroupAddon addonType="prepend">
                <Button className="bg-info" type="submit">
                  Add Task
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddToDo;
