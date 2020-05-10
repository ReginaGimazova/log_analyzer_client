import React from "react";
import styled, { css } from "styled-components";
import { AiFillExclamationCircle } from "react-icons/all";

const MessageWrapper = styled.div(
  ({ customStyles }) => css`
    display: flex;
    ${customStyles && customStyles};
  `
);

const Text = styled.p`
  font-size: inherit;
  font-weight: bold;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.yellow};
`;

const Message = ({ children, customStyles, withIcon }) => (
  <MessageWrapper customStyles={customStyles}>
    {withIcon && (
      <Icon>
        <AiFillExclamationCircle />
      </Icon>
    )}
    <Text>{children}</Text>
  </MessageWrapper>
);

export default Message;
