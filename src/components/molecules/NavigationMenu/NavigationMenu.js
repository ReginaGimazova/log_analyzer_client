import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  max-width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavigationItem = styled.span(
  ({ theme: { breakpoints, colors }, active }) => css`
    width: max-content;
    min-width: 150px;
    padding: 10px 20px;
    border-radius: 3px;
    background-color: ${active ? colors.lightGrey : colors.white};
    color: ${colors.darkGrey};
    font-size: 1rem;
    cursor: pointer;
    font-weight: ${active ? "bold" : "normal"};
    transition: all 0.8s ease;
    text-transform: uppercase;

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:nth-child(2) {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      margin-left: -1px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      width: 100%;
      border-bottom: 1px solid ${colors.darkGrey};
      &:first-child {
        margin-right: 0;
      }
    }
  `
);

const NavigationMenu = ({ menuItems }) => {
  return (
    <Navigation>
      {menuItems?.map(({ title, active, to }, index) => (
        <NavigationItem key={index} active={active}>
          <Link to={to}>{title}</Link>
        </NavigationItem>
      ))}
    </Navigation>
  );
};

export default NavigationMenu;
