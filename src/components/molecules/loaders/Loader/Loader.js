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
  ({ theme: { colors } }) => css`
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    margin-left: 20px;
    border: solid 0.25rem ${colors.darkGrey};
    border-left-color: transparent;
    border-radius: 50%;
    animation: ${rotation} 1s linear infinite;
  `
);

const LoaderWrapper = styled.div(
  ({ customStyles }) => css`
    display: flex;
    ${customStyles && customStyles()}
  `
);

const Text = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: block;
`;

const Loader = ({ customStyles }) => {
  return (
    <LoaderWrapper customStyles={customStyles}>
      <Text>Loading</Text>
      <SpinnerElem />
    </LoaderWrapper>
  );
};

export default Loader;
