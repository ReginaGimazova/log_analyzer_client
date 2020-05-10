import React from "react";
import { css } from "styled-components";
import Button from "../Button";

const customStyles = ({ colors }) => css`
  margin-top: 20px;
  padding: 5px;
  background-color: ${colors.green};
  color: ${colors.white};

  &:hover,
  &:focus {
    background-color: ${colors.darkGreen};
  }
`;

const SubmitButton = ({ children, onClick }) => (
  <Button customStyles={customStyles} onClick={onClick} type="submit">
    {children}
  </Button>
);

export default SubmitButton;
