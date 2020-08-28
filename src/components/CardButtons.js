import React from "react";
import { Button } from "reactstrap";
import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";

const CardButtons = (props) => {
  const click = () => {
    console.log();
  };
  return (
    <div className="bg-light">
      <Button className="bg-light border-light" onClick={click}>
        <MdExpandMore style={{ color: "black", fontSize: "2em" }} />
      </Button>

      <Button className="bg-light border-light" onClick={click}>
        <FaUserEdit
          className="float-right mx-4"
          style={{ color: "blue", fontSize: "1.5em" }}
        />
      </Button>

      <Button className="bg-light border-light" onClick={click}>
        <AiFillDelete
          className="float-right"
          style={{ color: "red", fontSize: "1.5em" }}
        />
      </Button>
    </div>
  );
};

export default CardButtons;
