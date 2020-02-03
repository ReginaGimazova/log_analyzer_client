import React from "react";
import StyledButton from "react-bootstrap/Button";
import styled from "styled-components";

const MyButton = styled(StyledButton)(({theme}) =>`
  background-color: ${ theme.colors.lightGrey};
  border: none;
  
  &:hover, &:focus, &:active {
    background-color: ${theme.colors.darkGrey};
  }

  &:focus {
    box-shadow: none;
  }
`);

const Button = ({children, onClick, className}) => {
  return (
    <MyButton variant="secondary" onClick={onClick} className={className}>{children}</MyButton>
  )
};

export default Button;
