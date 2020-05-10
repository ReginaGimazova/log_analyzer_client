import React from "react";
import { darken } from "polished";
import styled from "styled-components";

const InputField = styled.input`
  width: 100%;
  border: 0.0625rem solid ${({ theme }) => darken(0.3, theme.colors.white)};
  padding: 1.25rem;
  border-radius: 0.1875rem;
  outline: 0;
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => darken(0.2, theme.colors.white)};
  }
`;

const Input = props => {
  const { type, name, placeholder, required, onChange, onBlur, value } = props;

  return (
    <InputField
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
};

export default Input;
