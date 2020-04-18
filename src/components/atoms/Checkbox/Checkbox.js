import React from "react";
import styled, { css } from "styled-components";

const Label = styled.label`
  display: flex;
  position: relative;
  margin-top: 1.25rem;
  padding-left: 1.5rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const DefaultCheckbox = styled.input(
  ({ theme: { colors } }) => css`
  position: absolute;
  top: 0.125rem;
  left: 0;
  cursor: pointer;
  + span {
    background-color: transparent;
    border: 0.0625rem solid #adadad;
  }
  &:checked + span {
      background: ${colors.blue} url('/src/static/icons/checkmark.svg') center no-repeat;
      background-size: 0.8rem;
      border: 0.0625rem solid ${colors.blue};
    }
  }
`
);

const CustomCheckbox = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0.125rem;
  left: 0;
  height: 0.9375rem;
  width: 0.9375rem;
  border-radius: 0.1875rem;
`;

const Checkbox = ({ onChange, value, checked, children, id }) => (
  <Label htmlFor={id}>
    <DefaultCheckbox
      type="checkbox"
      onChange={onChange}
      value={value}
      checked={checked}
      id={id}
    />
    {children}
  </Label>
);

export default Checkbox;
