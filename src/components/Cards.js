import React from "react";
import { Card, CardTitle } from "reactstrap";

import CardButtons from "./CardButtons";

const Cards = (props) => {
  const { title, id } = props.item;

  return (
    <>
      <Card className="m-3 bg-dark text-center text-light">
        <CardTitle className="mt-3">{title} </CardTitle>
        <CardButtons id={id} />
      </Card>
    </>
  );
};

export default Cards;
