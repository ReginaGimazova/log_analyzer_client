import React from "react";
import styled, { css } from "styled-components";
import { MdCheck } from "react-icons/md";

const Label = styled.label`
  display: flex;
  position: relative;
  margin-top: 1.25rem;
  padding-left: 1.5rem;
  cursor: pointer;
  user-select: none;
`;

const DefaultCheckbox = styled.input(
  ({ theme: { colors } }) => css`
    position: absolute;
    top: 0.125rem;
    left: 0;
    cursor: pointer;
    opacity: 0;

    + span {
      background-color: transparent;
      border: 0.0625rem solid #adadad;
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
    {checked ? (
      <CustomCheckbox checked={checked}>
        <MdCheck />
      </CustomCheckbox>
    ) : (
      <CustomCheckbox checked={checked} />
    )}

    {children}
  </Label>
);

export default Checkbox;
