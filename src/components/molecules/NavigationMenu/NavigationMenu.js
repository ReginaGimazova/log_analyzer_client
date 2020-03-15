import React from "react";
import styled from "styled-components";

import Button from "../../atoms/Button";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  margin-bottom: 30px;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavigationButton = styled(Button)(
  ({ theme: { breakpoints } }) => `
  padding: 10px 20px;
  
  &:first-child{
    margin-right: 30px;
  }
  
  @media all and (max-width: ${breakpoints.sm}){
     &:first-child{
       margin-right: 0;
       margin-bottom: 10px;
     }
  } 
`
);

const NavigationMenu = ({ menuItems }) => (
  <Navigation>
    {menuItems.map(({ title, onClick, active }, index) => (
      <NavigationButton key={index} onClick={onClick} active={active}>
        {title}
      </NavigationButton>
    ))}
  </Navigation>
);

export default NavigationMenu;
