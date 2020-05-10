import React, { useState } from "react";
import Select from "react-select";
import styled, { css } from "styled-components";
import Input from "../../atoms/Input";
import selectCustomStyles from "../../../static/styles/customStyles";
import SubmitButton from "../../atoms/buttons/SubmitButton";

const Form = styled.form(
  ({ theme: { breakpoints } }) => css`
    width: 50%;

    @media all and (max-width: ${breakpoints.md}) {
      width: 100%;
    }
  `
);

const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

const NewStatusForm = ({ addNewStatus }) => {
  const configTypes = [
    {
      value: "Explain",
      label: "Explain"
    },
    {
      value: "Profile",
      label: "Profile"
    }
  ];

  const [configType, setConfigType] = useState(configTypes[0]);
  const [value, setValue] = useState("");

  const onValueChange = event => {
    setValue(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    addNewStatus({
      value,
      configType: configType.value
    });
    setConfigType(configType[0]);
    setValue("");
  };

  return (
    <Form>
      <InputWrapper>
        <Input
          value={value}
          onChange={onValueChange}
          placeholder="Status value"
        />
      </InputWrapper>
      <Select
        options={configTypes}
        value={configType}
        onChange={setConfigType}
        styles={selectCustomStyles}
      />
      <SubmitButton onClick={onSubmit}>Add status</SubmitButton>
    </Form>
  );
};

export default NewStatusForm;
