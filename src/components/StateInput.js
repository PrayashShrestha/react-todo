import React from "react";
import { Input, Form, Col, InputGroup, InputGroupAddon } from "reactstrap";

const StateInput = (props) => {
  const { onSubmit, name, value, placeholder, onChange, buttonLabel } = props;
  return (
    <Form className="m-3 " onSubmit={onSubmit}>
      <Col sm="4" md="5" className="mx-auto">
        <InputGroup>
          <Input
            className="border-dark text-center "
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />

          <InputGroupAddon addonType="append">
            <Input
              className="bg-info border-dark"
              type="submit"
              value={buttonLabel}
            />
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Form>
  );
};
export default StateInput;
