import React from "react";
import { css } from "styled-components";

import Button from "../Button";

const customStyles = ({ colors }) => css`
  border: 2px solid ${colors.red};
  background-color: ${colors.white};
  color: ${colors.red};
  font-weight: bold;

  &:hover,
  &:focus {
    background-color: ${colors.red};
    color: ${colors.white};
  }
`;

const StartLogAnalyzeButton = ({ onclick }) => (
  <Button type="submit" onClick={onclick} customStyles={customStyles}>
    Start log analyze
  </Button>
);

export default StartLogAnalyzeButton;
