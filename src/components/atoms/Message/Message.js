import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Message = ({ children }) => <Text>{children}</Text>;

export default Message;
