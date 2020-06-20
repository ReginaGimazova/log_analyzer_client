import React from "react";
import styled from "styled-components";
import { AiFillExclamationCircle } from "react-icons/all";
import types from "../../../constants/types";

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

const StatusList = ({ statuses, type }) => {
  let statusesArray = [].concat(statuses);

  if (type === types.PROFILE && statuses[0] === "[") {
    statusesArray = JSON.parse(statuses);
  }
  return (
    <List>
      {statusesArray.map((status, index) => (
        <Item key={index}>
          <Icon>
            <AiFillExclamationCircle />
          </Icon>
          {status?.status || status}
          {status?.duration && (
            <Duration>- Duration: {status.duration}</Duration>
          )}
        </Item>
      ))}
    </List>
  );
};

export default StatusList;
