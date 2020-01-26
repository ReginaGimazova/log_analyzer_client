import React from "react";
import {Button as StyledButton} from "@material-ui/core";
import styled from "styled-components";

const MyButton = styled(StyledButton)`
`;

const Button = ({children}) => {
  return (
    <MyButton variant="contained">{children}</MyButton>
  )
};

export default Button;
