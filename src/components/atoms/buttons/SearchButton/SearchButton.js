import React from "react";
import styled, { css } from "styled-components";
import { MdSearch } from "react-icons/md";

import Button from "../Button";

const customStyles = ({ colors, breakpoints }) => css`
  margin-left: 2rem;
  padding: 0.9rem;
  height: max-content;
  background-color: ${colors.green};
  color: ${colors.white};

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.darkGreen};
    color: ${colors.white};
  }

  @media all and (max-width: ${breakpoints.sm}) {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
  }
`;

const Icon = styled(MdSearch)`
  width: 1.6rem;
  height: 1.6rem;
  fill: ${({ theme }) => theme.colors.white};
`;

const SearchButton = ({ onClick }) => (
  <Button type="submit" onClick={onClick} customStyles={customStyles}>
    <Icon />
    Search
  </Button>
);

export default SearchButton;
