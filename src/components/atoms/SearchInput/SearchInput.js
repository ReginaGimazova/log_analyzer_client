import React from "react";
import styled from "styled-components";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { MdSearch } from "react-icons/md";

const InputWrapper = styled(InputGroup)`
  width: 50%;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const Input = styled(FormControl)`
  font-size: 1rem;
  border-color: ${({ theme }) => theme.colors.lightGrey};

  &:focus {
    border-color: ${({ theme }) => theme.colors.lightGrey};
    box-shadow: none;
  }
`;

const Icon = styled(MdSearch)`
  width: 1.6rem;
  height: 1.6rem;
  fill: ${({ theme }) => theme.colors.darkGrey};
`;

const SearchButton = styled.button(
  ({ theme }) => `
  display: flex;
  align-items: center;
  background-color: ${theme.colors.lightGrey};
  width: 2.5rem;
  justify-content: center;
  border-radius: 0 3px 3px 0;
  
   &:hover, &:focus, &:active {
    background-color: ${theme.colors.lightGrey};
  }
 
`
);

const SearchInput = () => {
  return (
    <InputWrapper>
      <Input placeholder="Search tables" />
      <SearchButton>
        <Icon />
      </SearchButton>
    </InputWrapper>
  );
};

export default SearchInput;
