import React from "react";
import { css } from "styled-components";
import Button from "../Button";

const customButtonStyles = ({ colors, breakpoints }) => css`
  font-weight: bold;
  padding: 10px;
  color: ${colors.lightGrey};
  background-color: ${colors.green};
  &:hover,
  &:focus {
    background-color: ${colors.darkGreen};
  }

  @media screen and (max-width: ${breakpoints.md}) {
    margin-top: 30px;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const ActionButton = ({ action, actionType }) => (
  <Button customStyles={customButtonStyles} onClick={action}>
    {actionType}
  </Button>
);

export default ActionButton;
