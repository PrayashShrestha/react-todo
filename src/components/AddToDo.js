import React, { useContext } from "react";

import TodoContext from "../contexts/todos/TodoContext";
import uuid from "react-uuid";
import StateInput from "./StateInput";

const AddToDo = () => {
  const values = useContext(TodoContext);
  const {
    AddTodos,
    localStates,
    setLocalState,
    onChange,
    editItem,
    setEditItem,
    EditTodo,
  } = values;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      if (!localStates) return;
      AddTodos({
        id: uuid(),
        title: localStates,
      });
      setLocalState("");
      console.log(localStates);
    } else {
      if (!localStates.title) return;
      EditTodo({
        id: localStates.id,
        title: localStates.title,
      });
      setLocalState("");
      setEditItem("");
      console.log(localStates.title);
    }
  };

  return (
    <>
      <StateInput
        onSubmit={onSubmit}
        name="addtodo"
        value={editItem ? localStates.title : localStates}
        placeholder="Enter Todo"
        onChange={onChange}
        buttonLabel={editItem ? "Edit Todo" : "Add Todo"}
      />
    </>
  );
};

export default AddToDo;

/* <Form className="m-3" onSubmit={onSubmit}>
        <FormGroup col>
          <Col md={4} sm={7} className="mx-auto">
            <InputGroup>
              <Input
                className="border-dark"
                name="addtodo"
                value={localStates}
                placeholder="Enter Todo"
                onChange={onChange}
              />
              <InputGroupAddon addonType="prepend">
                <Button className="bg-info" type="submit">
                  Add Task
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </FormGroup>
      </Form> */
