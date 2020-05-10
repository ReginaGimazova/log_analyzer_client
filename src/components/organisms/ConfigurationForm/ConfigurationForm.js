import React, { useCallback, useState } from "react";
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
      <SubmitButton onClick={applyConfig}>Apply</SubmitButton>
    </form>
  );
};
export default ConfigurationForm;
