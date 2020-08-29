import React, { useContext } from "react";
import { Button } from "reactstrap";
import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import TodoContext from "../contexts/todos/TodoContext";

const CardButtons = (props) => {
  const id = props.id;

  const values = useContext(TodoContext);
  const { DeleteTodos, findTodo } = values;

  //delete event function call
  const deleteClick = () => {
    DeleteTodos(id);
  };

  //edit event function call
  const editClick = () => {
    findTodo(id);
  };

  return (
    <div className="bg-light">
      <Button className="bg-light border-light" onClick={editClick}>
        <FaUserEdit
          className="float-right mx-4"
          style={{ color: "blue", fontSize: "1.5em" }}
        />
      </Button>

      <Button className="bg-light border-light" onClick={deleteClick}>
        <AiFillDelete
          className="float-right"
          style={{ color: "red", fontSize: "1.5em" }}
        />
      </Button>
    </div>
  );
};

export default CardButtons;
