import React from "react";
import styled, { css } from "styled-components";

const MyButton = styled.button(
  ({ theme, theme: { colors, breakpoints }, active, customStyles }) => css`
    width: max-content;
    min-width: 150px;
    border-radius: 3px;
    background-color: ${active ? colors.lightGrey : colors.white};
    color: ${colors.darkGrey};
    cursor: pointer;
    font-weight: ${active ? "bold" : "normal"};
    transition: all 0.8s ease;
    padding: 10px 20px;

    &:hover,
    &:focus {
      background-color: ${colors.lightGrey};
    }

    &:active {
      font-weight: bold;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      padding: 10px 0;
    }

    ${customStyles && customStyles(theme)};
  `
);

const Button = ({
  children,
  onClick,
  className,
  active,
  customStyles,
  type = "button"
}) => {
  return (
    <MyButton
      onClick={onClick}
      className={className}
      active={active}
      customStyles={customStyles}
      type={type}
    >
      {children}
    </MyButton>
  );
};

export default Button;
