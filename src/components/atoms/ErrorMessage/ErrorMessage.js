import React from "react";
import styled from "styled-components";

const MessageBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightRed};
  padding: 10px;
  border-radius: 3px;
  width: max-content;
  max-width: 100%;
  min-width: 200px;
`;

const Message = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

const ErrorMessage = ({ children }) => (
  <MessageBox>
    <Message>{children}</Message>
  </MessageBox>
);

export default ErrorMessage;
