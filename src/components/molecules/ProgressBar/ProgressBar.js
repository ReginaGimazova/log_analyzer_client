import React from "react";
import styled, { css } from "styled-components";

const BarContainer = styled.div(
  ({ theme: { colors } }) => css`
    height: 10px;
    width: 100%;
    margin-top: 50px;
    background-color: ${colors.lightGrey};
  `
);

const Filler = styled.div(
  ({ theme: { colors }, percent }) => css`
    height: inherit;
    width: ${percent}%;
    background-color: ${colors.green};
    transition: width 0.2s ease-in;
  `
);

const ProgressBar = ({ percent = 0 }) => (
  <BarContainer>
    <Filler percent={+percent} />
  </BarContainer>
);

export default ProgressBar;
