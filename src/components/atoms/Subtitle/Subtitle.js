import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-weight: bold;
  font-size: 1.125rem;
  color: ${({theme}) => theme.colors.darkGrey};
  margin-bottom: 20px;
`;

const Subtitle = ({children}) => (
  <H2>{children}</H2>
);

export default Subtitle;
