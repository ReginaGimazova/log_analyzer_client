import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const MyButton = styled.button(
  ({ theme: { colors }, color = colors.grey, active }) => `
  border: none;
  width: max-content;
  min-width: 150px;
  color: ${colors.white};
  border-radius: 3px;
  
  background-color: ${active ? darken(0.3, color) : color};
  &:hover, &:focus, &:active {
    background-color: ${darken(0.2, color)};
  }
`
);

const Button = ({ children, onClick, className, active, color }) => {
  return (
    <MyButton
      onClick={onClick}
      className={className}
      active={active}
      color={color}
    >
      {children}
    </MyButton>
  );
};

export default Button;
