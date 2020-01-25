import React from "react";
import {Button as StyledButton} from "@material-ui/core";
import styled from "styled-components";

const MyButton = styled(StyledButton)`
  background-color: ${({theme, isSubmit}) => isSubmit ? theme.colors.green : 'grey'};
`;

const Button = ({children}) => {
  return (
    <MyButton variant="contained" isSubmit={true}>{children}</MyButton>
  )
};

export default Button;
