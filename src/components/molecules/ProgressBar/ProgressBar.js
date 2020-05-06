import React from "react";
import styled, { css } from "styled-components";

const BarContainer = styled.div(
  ({ theme: { colors } }) => css`
    height: 30px;
    width: 500px;
    margin-top: 50px;
    border: 1px solid ${colors.darkGrey};
  `
);

const Filler = styled.div(
  ({ theme: { colors }, percent }) => css`
    height: 100%;
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
