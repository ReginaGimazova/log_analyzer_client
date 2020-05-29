import React from "react";
import styled, { css } from "styled-components";

const MessageBox = styled.div(
  ({ additionalStyles, theme: { colors } }) => css`
    background-color: ${colors.lightRed};
    padding: 10px;
    border-radius: 3px;
    width: max-content;
    max-width: 100%;
    min-width: 200px;

    ${additionalStyles && additionalStyles}
  `
);

const Message = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

const ErrorMessage = ({ children, additionalStyles }) => (
  <MessageBox additionalStyles={additionalStyles}>
    <Message>{children}</Message>
  </MessageBox>
);

export default ErrorMessage;
