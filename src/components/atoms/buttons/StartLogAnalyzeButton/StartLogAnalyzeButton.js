import React from "react";
import { css } from "styled-components";

import Button from "../Button";

const customStyles = ({ colors, breakpoints }) => css`
  border: 2px solid ${colors.red};
  background-color: ${colors.white};
  color: ${colors.red};
  font-weight: bold;

  &:hover,
  &:focus {
    background-color: ${colors.red};
    color: ${colors.white};
  }

  @media screen and (max-width: ${breakpoints.md}) {
    margin-top: 20px;
    width: 100%;
  }
`;

const StartLogAnalyzeButton = ({ onClick }) => (
  <Button type="submit" onClick={onClick} customStyles={customStyles}>
    Start log analyze
  </Button>
);

export default StartLogAnalyzeButton;
