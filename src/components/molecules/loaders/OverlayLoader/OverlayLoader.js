import React from "react";
import styled, { css } from "styled-components";
import Loader from "../Loader";

const LoaderWrapper = styled.div(
  ({ data, theme: { colors } }) => css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${colors.white};
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${data ? "0.8" : "1"};
  `
);

const OverlayLoader = ({ data }) => (
  <LoaderWrapper data={data}>
    <Loader />
  </LoaderWrapper>
);

export default OverlayLoader;
