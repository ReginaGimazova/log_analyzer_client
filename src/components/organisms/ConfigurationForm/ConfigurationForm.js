import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";

import Checkbox from "../../atoms/Checkbox";
import SubmitButton from "../../atoms/buttons/SubmitButton";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  width: max-content;
  margin-right: 20px;
  font-size: 1.2rem;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Icon = styled.span(
  ({ theme: { colors } }) => css`
    display: flex;
    margin-top: 1.25rem;
    margin-left: 1rem;
    cursor: pointer;
    color: ${colors.lightRed};

    &:hover {
      color: ${colors.red};
    }
  `
);

const ConfigurationForm = ({
  configs,
  updateConfig,
  removeStatus,
  currentType
}) => {
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

  const onRemoveStatus = value => {
    removeStatus({ value, configType: currentType });
  };

  useEffect(() => {
    setStatuses(configs);
  }, [configs]);

  const getCheckbox = ({ value, mode }) => (
    <InputWrapper key={value}>
      <Checkbox checked={mode} onChange={handleCheck} value={value}>
        {value}
      </Checkbox>
      <Icon onClick={() => onRemoveStatus(value)}>
        <FaTimes />
      </Icon>
    </InputWrapper>
  );

  return (
    <form>
      {configs.map(({ value, mode }) =>
        getCheckbox({
          value,
          mode
        })
      )}
      <SubmitButton onClick={applyConfig}>Apply</SubmitButton>
    </form>
  );
};
export default ConfigurationForm;
