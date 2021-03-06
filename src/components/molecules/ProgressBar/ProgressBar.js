import React, { useEffect } from "react";
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

const ProgressBar = ({ percent = 0, fetchProgress }) => {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const intervalId = setInterval(fetchProgress, 2000);

    if (percent === 100) {
      return clearInterval(intervalId);
    }
  }, []);

  return (
    <BarContainer>
      <Filler percent={+percent} />
    </BarContainer>
  );
};

export default ProgressBar;
