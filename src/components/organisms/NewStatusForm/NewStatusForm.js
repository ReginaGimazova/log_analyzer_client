import React, { useState } from "react";
import Select from "react-select";
import styled, { css } from "styled-components";
import Input from "../../atoms/Input";
import selectCustomStyles from "../../../static/styles/customStyles";
import SubmitButton from "../../atoms/buttons/SubmitButton";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";

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

const ErrorMessageWrapper = styled.div`
  margin-top: 30px;
`;

const duplicationErrorMessage = "This status already exists";

const NewStatusForm = ({ addNewStatus, configs }) => {
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
  const [duplicateError, setDuplicateError] = useState("");

  const onValueChange = event => {
    setValue(event.target.value);
  };

  const compareStrings = (string1, string2) =>
    string1
      .replace(/[^a-zA-Z 0-9]+/g, "")
      .split(" ")
      .join("")
      .toLowerCase() ===
    string2
      .replace(/[^a-zA-Z 0-9]+/g, "")
      .split(" ")
      .join("")
      .toLowerCase();

  const checkStatusExist = statusValue => {
    return configs.find(
      ({ value: configValue, type }) =>
        compareStrings(statusValue, configValue) &&
        compareStrings(configType.value, type)
    );
  };

  const onBlurValue = event => {
    const alreadyExist = checkStatusExist(event.target.value);
    if (alreadyExist) {
      setDuplicateError(duplicationErrorMessage);
    } else {
      setDuplicateError("");
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const alreadyExist = checkStatusExist(value);
    if (alreadyExist) {
      setDuplicateError(duplicationErrorMessage);
      return;
    }

    setDuplicateError("");

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
          onBlur={onBlurValue}
          placeholder="Status value"
        />
      </InputWrapper>
      <Select
        options={configTypes}
        value={configType}
        onChange={setConfigType}
        styles={selectCustomStyles}
      />
      {duplicateError && (
        <ErrorMessageWrapper>
          <ErrorMessage>{duplicateError}</ErrorMessage>
        </ErrorMessageWrapper>
      )}
      <SubmitButton disabled={duplicateError} onClick={onSubmit}>
        Add status
      </SubmitButton>
    </Form>
  );
};

export default NewStatusForm;
