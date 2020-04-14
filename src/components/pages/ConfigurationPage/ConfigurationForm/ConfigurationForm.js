import React, { useState } from "react";
import styled, { css } from "styled-components";
import Subtitle from "../../../atoms/Subtitle/Subtitle";
import Button from "../../../atoms/buttons/Button";
import Checkbox from "../../../atoms/Checkbox";
import getActiveStatuses from "./getActivestatuses";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin-right: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const customStyles = ({ colors }) => css`
  margin-top: 20px;
  padding: 5px;
  background-color: ${colors.green};
  color: ${colors.white};
`;

const ConfigurationForm = ({ configs }) => {
  const activeStatuses = getActiveStatuses({ statuses: configs });

  const [statuses, setStatuses] = useState(activeStatuses || undefined);

  const handleCheck = event => {
    const { value, checked } = event.target;

    const updatedCheckedFeatures = checked
      ? [...statuses, +value]
      : statuses.filter(item => item !== +value);
    setStatuses(updatedCheckedFeatures);
  };

  const getCheckbox = ({ id, value }) => {
    let isChecked = false;
    if (statuses) {
      isChecked = !!statuses.find(item => item === +id);
    }
    return (
      <InputWrapper key={id}>
        <Checkbox
          checked={isChecked}
          onChange={handleCheck}
          value={value}
          id={id}
        >
          {value}
        </Checkbox>
      </InputWrapper>
    );
  };

  return (
    <form>
      <Subtitle>Enable critical statuses</Subtitle>
      {configs.map(item => getCheckbox({ id: item.id, value: item.value }))}
      <Button customStyles={customStyles}>Apply</Button>
    </form>
  );
};
export default ConfigurationForm;
