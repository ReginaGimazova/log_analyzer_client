import React from "react";
import styled, { css } from "styled-components";

const Title = styled.h1(
  ({ theme }) => css`
    text-transform: uppercase;
    font-weight: normal;
    font-size: 1.75rem;
    margin-bottom: 30px;

    @media screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.4rem;
    }
  `
);

const PageTitle = ({ children }) => <Title>{children}</Title>;

export default PageTitle;
