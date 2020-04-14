import React from "react";
import styled, { css } from "styled-components";

const MyButton = styled.button(
  ({ theme, theme: { colors }, active, customStyles }) => css`
    border: none;
    width: max-content;
    min-width: 150px;
    color: ${colors.white};
    border-radius: 3px;
    background-color: ${active ? colors.darkGrey : colors.lightGrey};
    color: ${active ? colors.lightGrey : colors.darkGrey};

    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.darkGrey};
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
