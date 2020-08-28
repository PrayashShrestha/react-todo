import React, { useContext } from "react";
import Cards from "./Cards";
import { Row, Col } from "reactstrap";
import TodoContext from "../contexts/todos/TodoContext";

const List = () => {
  const values = useContext(TodoContext);
  console.log(values.todos);
  return (
    <div className="container text-center">
      <h1 className="font-weight-bold">Task-List</h1>
      <Row sm="2" md="3" className="mx-auto">
        {values.todos.map((item) => (
          <Col key={item.id}>
            <Cards item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default List;
