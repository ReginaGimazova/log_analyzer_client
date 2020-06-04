import React, { useState } from "react";
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

const StartLogAnalyzeButton = ({ onClick }) => {
  const [disabled, setDisabled] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    onClick();
    setDisabled(true);
  };

  return (
    <Button
      type="submit"
      onClick={onSubmit}
      customStyles={customStyles}
      disabled={disabled}
    >
      Start log analysis
    </Button>
  );
};

export default StartLogAnalyzeButton;
