import React from "react";
import styled, { css } from "styled-components";

const MyButton = styled.button(
  ({ theme, theme: { colors }, active, customStyles }) => css`
    width: max-content;
    min-width: 150px;
    border-radius: 3px;
    background-color: ${active ? colors.lightGrey : colors.white};
    color: ${colors.darkGrey};
    cursor: pointer;
    font-weight: ${active ? "bold" : "normal"};
    transition: all 0.8s ease;

    &:hover,
    &:focus {
      background-color: ${colors.lightGrey};
    }

    &:active {
      font-weight: bold;
    }

    ${customStyles && customStyles(theme)};
  `
);

const Button = ({ children, onClick, className, active, customStyles }) => {
  return (
    <MyButton
      onClick={onClick}
      className={className}
      active={active}
      customStyles={customStyles}
    >
      {children}
    </MyButton>
  );
};

export default Button;
