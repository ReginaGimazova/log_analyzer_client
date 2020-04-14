import React from "react";
import styled, { css } from "styled-components";

import Button from "../../atoms/buttons/Button";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  max-width: 100%;
  margin-bottom: 30px;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavigationButton = styled(Button)(
  ({ theme: { breakpoints } }) => css`
    padding: 10px 20px;

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:nth-child(2) {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      margin-left: -1px;
    }

    @media all and (max-width: ${breakpoints.sm}) {
      width: 100%;
      &:first-child {
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
