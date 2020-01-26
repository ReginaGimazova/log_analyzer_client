import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: normal;
  font-size: 28px;
`;

const PageTitle = ({children}) => (
  <Title>{children}</Title>
);

export default PageTitle;
