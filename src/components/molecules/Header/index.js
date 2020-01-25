import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.lightGrey};
  box-shadow: 3px 3px 5px 2px #adadad;
`;

const Header = () => {
  return (
    <StyledHeader />
  )
};

export default Header;
