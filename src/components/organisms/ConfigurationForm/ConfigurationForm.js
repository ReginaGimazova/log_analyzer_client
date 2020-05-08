import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

import Button from "../../atoms/buttons/Button";
import Checkbox from "../../atoms/Checkbox";
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

  &:hover,
  &:focus {
    background-color: ${colors.darkGreen};
  }
`;

const ConfigurationForm = ({ configs, updateConfig }) => {
  const activeStatuses = getActiveStatuses({ statuses: configs });

  const [statuses, setStatuses] = useState(activeStatuses || []);

  const handleCheck = event => {
    const { value, checked } = event.target;

    const updatedCheckedFeatures = checked
      ? [...statuses, configs.find(item => item.value === value)]
      : statuses.filter(item => item.value !== value);

    setStatuses(updatedCheckedFeatures);
  };

  const applyConfig = useCallback(() => {
    const ids = statuses.map(item => item.id);
    updateConfig(ids);
  }, [statuses]);

  const getCheckbox = ({ id, value }) => {
    let isChecked = false;
    if (statuses.length) {
      isChecked = !!statuses.find(item => item.id === +id);
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
      {configs.map(item => getCheckbox({ id: item.id, value: item.value }))}
      <Button customStyles={customStyles} onClick={applyConfig}>
        Apply
      </Button>
    </form>
  );
};
export default ConfigurationForm;
