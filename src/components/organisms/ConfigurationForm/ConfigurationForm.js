import React from "react";
import styled from "styled-components";
import FormComponent from 'react-bootstrap/Form';

const Form = styled(FormComponent)`
`;

const Input = styled(Form.Control)`
  width: 300px;
`;

const ConfigurationForm = () => {
  return (
    <Form>
      <Form.Label>Total volume of critical statuses</Form.Label>
      <Input type="number" />
    </Form>
  )
};
export default ConfigurationForm;
