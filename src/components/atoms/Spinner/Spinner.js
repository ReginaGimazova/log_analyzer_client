import React from "react";
import styled, { keyframes, css } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerElem = styled.div(
  ({ customStyles, theme: { colors } }) => css`
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: solid 0.25rem ${colors.green};
    border-left-color: transparent;
    border-radius: 50%;
    animation: ${rotation} 1s linear infinite;
    ${customStyles && customStyles(colors)}
  `
);

const Spinner = ({ customStyles }) => {
  return <SpinnerElem customStyles={customStyles} />;
};

export default Spinner;
