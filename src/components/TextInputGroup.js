import React from "react";
import { Input, Form, FormGroup, Col } from "reactstrap";

const TextInputGroup = ({ styles }) => {
  return (
    <>
      <Form>
        <FormGroup col>
          <Col sm={4} className="mx-auto">
            <Input className={styles} />
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};

export default TextInputGroup;
