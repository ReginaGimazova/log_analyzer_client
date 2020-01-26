import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";

const Form = styled.form`
  padding: 50px 20px;
`;

const ConfigurationForm = () => {
  return (
    <Form>
      <Button>Apply</Button>
    </Form>
  )
};
export default ConfigurationForm;
