import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import Checkbox from "../../atoms/Checkbox";
import getActiveStatuses from "./getActivestatuses";
import SubmitButton from "../../atoms/buttons/SubmitButton";

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

const ConfigurationForm = ({ configs, updateConfig }) => {
  const [statuses, setStatuses] = useState(configs);

  const handleCheck = event => {
    const { value, checked } = event.target;

    const updatedConfig = statuses.find(item => item.value === value);
    const updatedCheckedStatuses = [
      ...statuses,
      (updatedConfig.mode = +checked)
    ];

    setStatuses(updatedCheckedStatuses);
  };

  const applyConfig = useCallback(
    event => {
      event.preventDefault();
      updateConfig(statuses);
    },
    [statuses]
  );

  useEffect(() => {
    setStatuses(configs);
  }, [configs]);

  const getCheckbox = ({ id, value, mode }) => (
    <InputWrapper key={id}>
      <Checkbox checked={mode} onChange={handleCheck} value={value} id={id}>
        {value}
      </Checkbox>
    </InputWrapper>
  );

  return (
    <form>
      {configs.map(({ id, value, mode }) => getCheckbox({ id, value, mode }))}
      <SubmitButton onClick={applyConfig}>Apply</SubmitButton>
    </form>
  );
};
export default ConfigurationForm;
