import React from "react";
import {Button as StyledButton} from "@material-ui/core";
import styled from "styled-components";

const MyButton = styled(StyledButton)`
`;

const Button = ({children, onClick, className}) => {
  return (
    <MyButton variant="contained" onClick={onClick} className={className}>{children}</MyButton>
  )
};

export default Button;
