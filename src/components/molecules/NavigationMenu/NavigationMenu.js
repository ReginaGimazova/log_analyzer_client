import React from "react";
import styled from "styled-components";

import Button from "../../atoms/Button";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  width: max-content;
  
  @media all and (max-width: 600px){
    flex-direction: column;
    padding: 30px;
    width: 100%;
  }
`;

const NavigationButton = styled(Button)(({theme}) => `
  padding: 10px 20px;
  background-color: ${theme.colors.grey};
  
  &:first-child{
    margin-right: 30px;
  }
  
  @media all and (max-width: ${theme.breakpoints.md}){
     &:first-child{
       margin-right: 0;
       margin-bottom: 10px;
     }
  }
  
  &:hover {
    background-color: ${theme.colors.darkGrey};
  }
  

`);

const NavigationMenu = ({setIsBySql}) => {
  const onSqlChoose = () => {
    setIsBySql(true);
  };
  
  const onSqlUserHostChoose = () => {
    setIsBySql(false)
  };
  
  return (
    <Navigation>
      <NavigationButton onClick={onSqlChoose}> grouped by sql</NavigationButton>
      <NavigationButton onClick={onSqlUserHostChoose}> grouped by sql and user host</NavigationButton>
    </Navigation>
  )
};

export default NavigationMenu;
