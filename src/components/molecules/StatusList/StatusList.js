import React from "react";
import styled from "styled-components";
import { AiFillExclamationCircle } from "react-icons/all";

const List = styled.ul`
  padding: 20px 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.red};
`;

const Duration = styled.span`
  display: inline-block;
  margin-left: 3px;
`;

const StatusList = ({ statuses, duration }) => {
  const statusesArray = [].concat(statuses);

  return (
    <List>
      {statusesArray.map((status, index) => (
        <Item key={index}>
          <Icon>
            <AiFillExclamationCircle />
          </Icon>
          {status}
          {duration && <Duration>- Duration: {duration}</Duration>}
        </Item>
      ))}
    </List>
  );
};

export default StatusList;
