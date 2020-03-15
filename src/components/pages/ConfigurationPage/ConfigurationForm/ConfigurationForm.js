import React from "react";
import styled, { withTheme } from "styled-components";
import Subtitle from "../../../atoms/Subtitle/Subtitle";
import Button from "../../../atoms/Button";
import Checkbox from "../../../atoms/Checkbox";

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin-right: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
  padding: 5px;
`;

const ConfigurationForm = ({ theme, configs }) => {
  return (
    <>
      <form>
        <Subtitle>Enable critical statuses</Subtitle>
        {configs.map(item => (
          <FormGroup key={item.id}>
            <InputWrapper>
              <Checkbox checked={item.active}>{item.value}</Checkbox>
            </InputWrapper>
          </FormGroup>
        ))}
        <SubmitButton color={theme.colors.green}>Apply</SubmitButton>
      </form>
    </>
  );
};
export default withTheme(ConfigurationForm);
