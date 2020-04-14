import React from "react";
import styled from "styled-components";
import Button from "../../atoms/buttons/Button";

const StyledWindow = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const ActionsWrapper = styled.div`
  display: flex;
`;

const ConfirmationWindow = ({ onClose, title, message }) => (
  <>
    <Title>{title}</Title>
    <Message>{message}</Message>
    <ActionsWrapper>
      <Button onClick={onClose}>No</Button>
      <Button>Yes</Button>
    </ActionsWrapper>
  </>
);

export default ConfirmationWindow;
